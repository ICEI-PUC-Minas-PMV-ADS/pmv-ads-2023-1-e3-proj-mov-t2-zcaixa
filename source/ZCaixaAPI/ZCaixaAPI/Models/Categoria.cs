using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ZCaixaV5.Models
{
    public class Categoria
    {
        [Key]
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int Id { get;  set; }

        [Required(ErrorMessage = "Informe uma Categoria")]
        public string? Nome { get; set; }

        //[Required(ErrorMessage = "Obrigatório um tipo (Receita ou Despesa)")]
        public string? Tipo { get; set; }

        public string? Username { get; set; }
       
    }
}
