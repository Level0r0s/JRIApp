﻿using System;

namespace RIAPP.DataService.DomainService.Security
{
    [AttributeUsage(AttributeTargets.Method | AttributeTargets.Class, AllowMultiple = true, Inherited = false)]
    public class AuthorizeAttribute : Attribute
    {
        public AuthorizeAttribute()
        {
            Roles = new string[0];
        }

        public string[] Roles { get; set; }

        public string RolesString
        {
            get { return string.Join(",", Roles); }
            set
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    Roles = new string[0];
                }
                else
                {
                    Roles = value.Split(',', ';');
                }
            }
        }
    }
}