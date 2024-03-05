using Microsoft.EntityFrameworkCore;
using ReactApp1.Server.Model;
using System.Collections.Generic;
using System.Security.AccessControl;

namespace ReactApp1.Server.Services
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {
        }
        public DbSet<DemoModel> DemoModels { get; set; }
       
    }
}
