using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ZCaixaAPI.Models;
using ZCaixaV5.Models;

namespace ZCaixaAPI.Data
{
    public class ZCaixaAPIContext : DbContext
    {
        public ZCaixaAPIContext (DbContextOptions<ZCaixaAPIContext> options)
            : base(options)
        {
        }

        //public DbSet<Usuario> Usuarios { get; set; } = default!;
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Categoria> Categorias { get; set; }
        public DbSet<Lancamento> Lancamentos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Usuario>().ToTable("Usuario");
            modelBuilder.Entity<Categoria>().ToTable("Categoria");
            modelBuilder.Entity<Lancamento>().ToTable("Lancamento");

        }
    }
}
