import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nzsahcgnzwwhtoetcaya.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56c2FoY2duend3aHRvZXRjYXlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY0NjExNTgsImV4cCI6MjA3MjAzNzE1OH0.jGwTCHow_y_YX6U45778_oc1p_ForUMdod6NgtnqpcA'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Product {
  id: string
  name: string
  description: string
  price: number
  stock_quantity: number
  image_url: string
  category_id: string
  is_active: boolean
  created_at: string
  updated_at: string
  category?: Category
}

export interface Category {
  id: string
  name: string
  description: string
  slug: string
  created_at: string
}

export interface Customer {
  id: string
  email: string
  first_name: string
  last_name: string
  phone?: string
  default_address?: any
  created_at: string
  updated_at: string
}

export interface Order {
  id: string
  order_number: string
  customer_id: string
  total_amount: number
  status: string
  shipping_address: any
  payment_method: string
  payment_status: string
  created_at: string
  updated_at: string
  order_items?: OrderItem[]
}

export interface OrderItem {
  id: string
  order_id: string
  product_id: string
  quantity: number
  unit_price: number
  total_price: number
  product?: Product
}

export interface CartItem {
  product: Product
  quantity: number
}