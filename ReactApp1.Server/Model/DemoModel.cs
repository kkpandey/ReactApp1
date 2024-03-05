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

    public class RandomUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        // Add other properties as needed
    }
}
