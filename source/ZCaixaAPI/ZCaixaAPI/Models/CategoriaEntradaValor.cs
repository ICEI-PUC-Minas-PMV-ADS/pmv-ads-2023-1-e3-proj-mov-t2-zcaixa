using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ZCaixaV5.Models
{
    public class CategoriaEntradaValor
    {
        
        //public int Id { get; set; }
        public string Categoria { get; set; }

        [DataType(DataType.Currency)]
        [Column(TypeName = "decimal(18, 2)")]
        public decimal Valor { get; set; }
        public string ValorF { get; set; }

        public List<CategoriaEntradaValor> ListaCategoriasEntradaValor()
        {
            return new List<CategoriaEntradaValor>
            {
            };
        }
    }
}
