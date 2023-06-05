using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ZCaixaV5.Models
{
    public class TipoLan
    {
        public string TipoLanId { get;  set; }
        public string NomeLan { get; set; }    
        public List<TipoLan> ListaTiposLan()
        {
            return new List<TipoLan>
            {
                new TipoLan { TipoLanId = "C", NomeLan = "Entrada"},
                new TipoLan { TipoLanId = "D", NomeLan = "Saída"}
            };
        }
    }
}
