﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ReactApp1.Server.Model
{
    public class DemoModel
    {
       public int Id { get; set; }
        public string Name { get; set; }
        public string Mobile { get; set; }
        public string email { get; set; }
        public string Address { get; set; }
        
    }
}
