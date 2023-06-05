using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ZCaixaV5.Models
{
    public class CategoriaLista
    {
        public string Text { get; set; }
        public string Value { get; set; }
  
        public List<CategoriaLista> ListaCategorias()
        {
            return new List<CategoriaLista>
            {
            };
        }
    }
}
