using System;
using System.Collections.Generic;

namespace Accentis.Database.Domain.Domain
{
    public partial class Designation
    {
        public Designation()
        {
            AspNetUsers = new HashSet<AspNetUsers>();
        }

        public int DesignationId { get; set; }
        public string DesignationName { get; set; }
        public bool? Status { get; set; }
        public bool Delete { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public ICollection<AspNetUsers> AspNetUsers { get; set; }
    }
}
