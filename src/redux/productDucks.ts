const initialState = {
  productList: [],
  productListByName: [],
  productObtainedById: null,
  isLoading: false,
}

const GET_PRODUCT_LIST_SUCCESS = 'GET_PRODUCT_LIST_SUCCESS'
const GET_PRODUCT_LIST_ERROR = 'GET_PRODUCT_LIST_ERROR'
const GET_PRODUCT_LIST_LOADING = 'GET_PRODUCT_LIST_LOADING'

const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS'
const GET_PRODUCT_ERROR = 'GET_PRODUCT_ERROR'
const GET_PRODUCT_LOADING = 'GET_PRODUCT_LOADING'

const SET_PRODUCT_LIST_BY_NAME = 'SET_PRODUCT_LIST_BY_NAME'

export const productReducer = (state:any = initialState, { type, payload } : any) => {
  switch (type) {
    case GET_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        productList: [...payload ],
      }
    case GET_PRODUCT_LIST_ERROR:
      return { ...initialState }
    case GET_PRODUCT_LIST_LOADING:
      return { ...state, isLoading: true }
    case SET_PRODUCT_LIST_BY_NAME:
      const productListByName = state.productList.filter((product : any) =>
        product.name.toLowerCase().includes(payload.toLowerCase())
      )
      return { ...state, productListByName }

    case GET_PRODUCT_SUCCESS:
      return { ...state, productObtainedById: { ...payload } }
    case GET_PRODUCT_ERROR:
      return { ...state }
    case GET_PRODUCT_LOADING:
      return { ...state, isLoading: true }

    default:
      return state
  }
}

export const actionGetProductList = {
  success: (productList : any) => {
    return {
      type: GET_PRODUCT_LIST_SUCCESS,
      payload: productList
    }
  },
  error: () => {
    return {
      type: GET_PRODUCT_LIST_ERROR
    }
  },
  loading: () => {
    return {
      type: GET_PRODUCT_LIST_LOADING
    }
  }
}

export const actionGetProduct = {
  success: (product : any) => {
    return {
      type: GET_PRODUCT_SUCCESS,
      payload: product
    }
  },
  error: () => {
    return {
      type: GET_PRODUCT_ERROR
    }
  },
  loading: () => {
    return {
      type: GET_PRODUCT_LOADING
    }
  }
}

export const actionFilteredProductByName = (nameToSearch:string) => {
  return {
    type: SET_PRODUCT_LIST_BY_NAME,
    payload: nameToSearch
  }
}