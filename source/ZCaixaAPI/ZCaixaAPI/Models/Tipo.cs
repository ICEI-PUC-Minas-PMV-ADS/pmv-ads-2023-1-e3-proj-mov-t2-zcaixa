using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ZCaixaV5.Models
{
    public class Tipo
    {
        public string TipoId { get;  set; }
        public string Nome { get; set; }    
        public List<Tipo> ListaTipos()
        {
            return new List<Tipo>
            {
                new Tipo { TipoId = "R", Nome = "Receita"},
                new Tipo { TipoId = "D", Nome = "Despesa"}
            };
        }
    }
}
