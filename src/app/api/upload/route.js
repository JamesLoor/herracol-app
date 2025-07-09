import axios from "axios";
import { randomUUID } from "crypto";
import FormData from "form-data";
import fstream from "fs";
import fs from "fs/promises";
import { NextResponse } from "next/server";
import os from "os";
import path from "path";

export async function POST(req) {
  try {
    const form = await req.formData();
    const file = form.get("file");

    if (!file || typeof file === "string") {
      return NextResponse.json(
        { error: "No valid file provided" },
        { status: 400 }
      );
    }

    const extension = file.name.split(".").pop()?.toLowerCase() || "jpg";
    const newFileName = `${randomUUID()}.${extension}`;

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const tmpPath = path.join(os.tmpdir(), newFileName);
    await fs.writeFile(tmpPath, buffer);

    const stream = fstream.createReadStream(tmpPath);

    const uploadForm = new FormData();
    uploadForm.append("file", stream);
    uploadForm.append("dir", `public_html/products/${process.env.NODE_ENV}`);
    uploadForm.append("overwrite", "1");

    const authToken = Buffer.from(
      `${process.env.CPANEL_USERNAME}:${process.env.CPANEL_PASSWORD}`
    ).toString("base64");

    const response = await axios.post(
      "https://vidres.ec:2083/execute/Fileman/upload_files",
      uploadForm,
      {
        headers: {
          ...uploadForm.getHeaders(),
          Authorization: `Basic ${authToken}`,
        },
        maxBodyLength: Infinity,
      }
    );

    await fs.unlink(tmpPath);

    return NextResponse.json({
      success: true,
      url: `https://vidres.ec/products/${process.env.NODE_ENV}/${newFileName}`,
      cpanel: response.data,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Upload failed",
        details: error?.response?.data || error.message,
      },
      { status: 500 }
    );
  }
}
