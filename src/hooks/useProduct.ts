import { useSelector, useDispatch } from 'react-redux'
import {
  actionGetProduct,
  actionGetProductList,
  actionFilteredProductByName
} from '../redux/productDucks'

const useProduct = () => {
  const dispatch = useDispatch()
  const productList = useSelector((store:any) => store.product.productList)
  const productListByName = useSelector(
    (store:any) => store.product.productListByName
  )
  const productObtainedById = useSelector(
    (store:any) => store.product.productObtainedById
  )
  const isLoading = useSelector((store:any) => store.product.isLoading)

  const getProductList = async () => {
    dispatch(actionGetProductList.loading())
    try {
      // if (token) {
        // const result = await getPatientListService(token, amount, page)
        // const patients = result.data.message
        // dispatch(actionGetProductList.success(patients))
      // }
    } catch (e) {
      console.log(e)
      dispatch(actionGetProductList.error())
    }
  }

  const getProduct = async (id:any) => {
    dispatch(actionGetProduct.loading())
    try {
      // const result = await getPatientService(token, id)
      // const { product } = result.data.message
      // dispatch(actionGetProduct.success(product))
    } catch (e) {
      console.log(e)
      dispatch(actionGetProduct.error())
    }
  }

  const searchProductByName = (name:any) => {
    dispatch(actionFilteredProductByName(name))
  }

  return {
    productList,
    productListByName,
    productObtainedById,
    isLoading,
    getProductList,
    getProduct,
    searchProductByName
  }
}

export default useProduct
