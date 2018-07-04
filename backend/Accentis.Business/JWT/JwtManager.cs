using EME.Business.JWT;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Accentis.Business.JWT
{
    public static class JwtManager
    {
        public static string GenerateToken(string username, TokenProviderOptions _jwtOptions)
        {
            var claimData = new[] { new Claim(ClaimTypes.Name, username) };
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtOptions.SecretKey));
            var signInCred = new SigningCredentials(key, SecurityAlgorithms.HmacSha256Signature);
            var token = new JwtSecurityToken(
                issuer: _jwtOptions.Issuer,
                audience: _jwtOptions.Audience,
                expires: DateTime.Now.AddMinutes(30),
                claims: claimData,
                signingCredentials: signInCred
                );
            var tokenString = new JwtSecurityTokenHandler().WriteToken(token);
            return tokenString;
        }
    }
}
