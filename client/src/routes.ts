export const clientRoutes ={
    home: "/",
    login: "/login",
    signup: "/signup",
    products: "/products",
    product: "/products/",
    basket: "/basket",
    delivery: "/delivery",
    favorite: "/favorite",
    profile: "/profile",
}

const base = "http://localhost:5000/api";

export const serverRoutes = {
    image: "http://localhost:5000/image/", 
    products: base + "/products?",
    product: base + "/products/",
    similarProducts: base + "/products/similar/",
    updateProduct: base + "/products/updateProducts", 
    signup: base + "/auth/signup",
    login: base + "/auth/login",
    auth: base + "/auth/auth",
    logout: base + "/auth/logout",
    basket: base + "/basket",
    purchase: base + "/basket/purchase",
    delivery: base + "/delivery",
    confirm: base + "/delivery/confirm",

  };