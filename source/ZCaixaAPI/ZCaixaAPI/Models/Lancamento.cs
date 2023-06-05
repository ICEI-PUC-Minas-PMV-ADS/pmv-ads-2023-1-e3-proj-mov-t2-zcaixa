using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ZCaixaV5.Models
{

    public class Lancamento
    {

        [Key]
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required(ErrorMessage = "Informe uma Data")]
        public DateTime Data { get; set; }

        [Required(ErrorMessage = "Informe a descrição")]
        public string? Descricao { get; set; }

        public string? Tipo { get; set; }

        [Required(ErrorMessage = "Informe um valor")]
        [DataType(DataType.Currency)]
        [Column(TypeName = "decimal(18, 2)")]
        public decimal Valor { get; set; }

        public bool Conciliado { get; set; }

        public string? Username { get; set; }

        [Required(ErrorMessage = "Informe uma Categoria")]
        public int CatId { get; set; }

        public Categoria? Cat { get; set; }

        [NotMapped]
        public List<Lancamento>? ListaLancamentosE { get; set; }
        [NotMapped]
        public List<Lancamento>? ListaLancamentosS { get; set; }
    }
    
    


}



