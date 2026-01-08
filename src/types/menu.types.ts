/**
 * Menu item categories available in The Velvet Bean
 */
export type MenuCategory = "coffee" | "pastry" | "tea";

/**
 * Represents a single product in the menu
 */
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image?: string;
  featured?: boolean;
}

/**
 * Category metadata for display purposes
 */
export interface CategoryInfo {
  id: MenuCategory;
  name: string;
  description: string;
  icon: string;
}
