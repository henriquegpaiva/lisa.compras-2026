// Importa a função de criação do client Supabase via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Cria o client com a URL e a chave fornecidas
export const supabase = createClient(
  'https://avaatpbwzfjzneglzats.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2YWF0cGJ3emZqem5lZ2x6YXRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIxMTI2MzgsImV4cCI6MjA4NzY4ODYzOH0.GWsFvWNWNXERtrYOaEaUBcWZTgDl6ciAHLLBOZVFbFg'
)
    