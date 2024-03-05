using Azure;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using ReactApp1.Server.Model;
using ReactApp1.Server.Services.Interface;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace ReactApp1.Server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        private IConfiguration _config;

        public UserController(IUserService userService, IConfiguration config)
        {
            _userService = userService;
            _config = config;
        }
        [AllowAnonymous]
        [HttpPost("login")]
        public IActionResult Login(User user)
        {
            if (_userService.Authenticate(user.Username, user.Password))
            {
                var token = GenerateToken(user);
                return Ok(new { token = token });
            }
            return Unauthorized("Invalid username or password");
        }

        private string GenerateToken(User user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier,user.Username)
            };
            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
                _config["Jwt:Audience"],
                claims,
                expires: DateTime.Now.AddMinutes(15),
                signingCredentials: credentials);


            return new JwtSecurityTokenHandler().WriteToken(token);

        }
        //To authenticate user
        private User Authenticate(User user)
        {
            var currentUser = _userService.GetUsers(user.Username, user.Password);
            if (currentUser != null)
            {
                return currentUser;
            }
            return null;
        }

        //[HttpPost("setpassword")]
        //public IActionResult SetPassword(User user)
        //{
        //    _userService.SetPassword(user.Username, user.Password);
        //    return Ok("Password updated successfully");
        //}
    }
}
