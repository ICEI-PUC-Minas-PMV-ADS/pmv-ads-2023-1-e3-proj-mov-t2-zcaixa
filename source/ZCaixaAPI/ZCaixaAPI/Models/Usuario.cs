using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ZCaixaAPI.Models
{
    public class Usuario
    {
        [Key]
        public string? Username { get; set; }
        public string? Nome { get; set; }
        public string? UltimoNome { get; set; }
        public string? Senha { get; set; }
        public string? Email { get; set; }
        public string? Telefone { get; set; }
        public DateTime DataNascimento { get; set; }
        [DataType(DataType.Currency)]
        [Column(TypeName = "decimal(18, 2)")]
        public decimal Meta { get; set; }
        public int MesConsulta { get; set; }
        public int AnoConsulta { get; set; }
    }
}
