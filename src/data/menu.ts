import type { MenuItem, CategoryInfo } from "../types/menu.types";

/**
 * Category information for filtering and display
 */
export const categories: CategoryInfo[] = [
  {
    id: "coffee",
    name: "Café de Especialidad",
    description: "Blends únicos de origen seleccionado",
    icon: "mdi:coffee",
  },
  {
    id: "pastry",
    name: "Postres",
    description: "Dulces artesanales recién horneados",
    icon: "mdi:cupcake",
  },
  {
    id: "tea",
    name: "Té & Infusiones",
    description: "Selección premium de hojas sueltas",
    icon: "mdi:tea",
  },
];

/**
 * Menu items data
 */
export const menuItems: MenuItem[] = [
  // Coffee
  {
    id: 1,
    name: "Espresso Doble",
    description: "Intenso y aromático, la esencia del café en su forma más pura.",
    price: 3.5,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=300&fit=crop",
    featured: true,
  },
  {
    id: 2,
    name: "Cappuccino Velvety",
    description: "Espresso con leche vaporizada y una delicada capa de espuma de seda.",
    price: 4.5,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop",
    featured: true,
  },
  {
    id: 3,
    name: "Latte Caramelo",
    description: "Suave espresso con leche cremosa y sirope de caramelo artesanal.",
    price: 5.0,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Cold Brew Premium",
    description: "Café macerado en frío durante 18 horas para un sabor suave y refrescante.",
    price: 4.8,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    name: "Mocha Velvet",
    description: "La perfecta unión entre café intenso y chocolate belga fundido.",
    price: 5.5,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400&h=300&fit=crop",
  },
  // Pastries
  {
    id: 6,
    name: "Croissant de Almendra",
    description: "Hojaldre dorado relleno de crema de almendras tostadas.",
    price: 4.2,
    category: "pastry",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop",
    featured: true,
  },
  {
    id: 7,
    name: "Tarta de Chocolate",
    description: "Ganache de chocolate oscuro sobre base de galleta especiada.",
    price: 5.8,
    category: "pastry",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
  },
  {
    id: 8,
    name: "Cheesecake Clásico",
    description: "Cremoso pastel de queso con coulis de frutos rojos.",
    price: 6.0,
    category: "pastry",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=300&fit=crop",
  },
  {
    id: 9,
    name: "Muffin de Arándanos",
    description: "Esponjoso y cargado de arándanos frescos de temporada.",
    price: 3.8,
    category: "pastry",
    image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&h=300&fit=crop",
  },
  // Tea
  {
    id: 10,
    name: "Earl Grey Imperial",
    description: "Té negro con bergamota italiana y notas florales.",
    price: 3.8,
    category: "tea",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop",
  },
  {
    id: 11,
    name: "Matcha Ceremonial",
    description: "Té verde japonés de primera cosecha, energizante y terroso.",
    price: 5.2,
    category: "tea",
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&h=300&fit=crop",
    featured: true,
  },
  {
    id: 12,
    name: "Chai Especiado",
    description: "Té negro con canela, cardamomo, jengibre y leche cremosa.",
    price: 4.5,
    category: "tea",
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=300&fit=crop",
  },
];

/**
 * Get menu items by category
 */
export function getItemsByCategory(category: MenuItem["category"]): MenuItem[] {
  return menuItems.filter((item) => item.category === category);
}

/**
 * Get featured items
 */
export function getFeaturedItems(): MenuItem[] {
  return menuItems.filter((item) => item.featured);
}
