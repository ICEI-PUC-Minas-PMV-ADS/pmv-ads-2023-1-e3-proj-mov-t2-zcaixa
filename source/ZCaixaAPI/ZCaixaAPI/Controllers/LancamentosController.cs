using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ZCaixaAPI.Data;
using ZCaixaV5.Models;

namespace ZCaixaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LancamentosController : ControllerBase
    {
        private readonly ZCaixaAPIContext _context;
        private readonly ZCaixaAPIContext _contextcat;

        public LancamentosController(ZCaixaAPIContext context)
        {
            _context = context;
            _contextcat = context;
        }

        // GET: api/Lancamentos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Lancamento>>> GetLancamentos()
        {
          if (_context.Lancamentos == null)
          {
              return NotFound();
          }
          
          var lancamento = from s in _context.Lancamentos.Include(s => s.Cat)
                           select s;
          //lancamento = lancamento.Where(s => s.Username.Contains(username)); 

          return await lancamento.ToListAsync();
        }

        // GET: api/Lancamentos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Lancamento>> GetLancamento(int id)
        {
          if (_context.Lancamentos == null)
          {
              return NotFound();
          }
            var lancamento = await _context.Lancamentos.FindAsync(id);

            if (lancamento == null)
            {
                return NotFound();
            }

            return lancamento;
        }

        // PUT: api/Lancamentos/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLancamento(int id, Lancamento lancamento)
        {
            if (id != lancamento.Id)
            {
                return BadRequest();
            }

            _context.Entry(lancamento).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LancamentoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Lancamentos
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Lancamento>> PostLancamento(Lancamento lancamento)
        {
          if (_context.Lancamentos == null)
          {
              return Problem("Entity set 'ZCaixaAPIContext.Lancamentos'  is null.");
          }
            _context.Lancamentos.Add(lancamento);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLancamento", new { id = lancamento.Id }, lancamento);
        }

        // DELETE: api/Lancamentos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLancamento(int id)
        {
            if (_context.Lancamentos == null)
            {
                return NotFound();
            }
            var lancamento = await _context.Lancamentos.FindAsync(id);
            if (lancamento == null)
            {
                return NotFound();
            }

            _context.Lancamentos.Remove(lancamento);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool LancamentoExists(int id)
        {
            return (_context.Lancamentos?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
