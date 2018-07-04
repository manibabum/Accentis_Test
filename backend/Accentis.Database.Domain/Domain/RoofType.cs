using System;
using System.Collections.Generic;

namespace Accentis.Database.Domain.Domain
{
    public partial class RoofType
    {
        public RoofType()
        {
            Roof = new HashSet<Roof>();
        }

        public int Rtid { get; set; }
        public string TypeName { get; set; }
        public bool Status { get; set; }
        public bool Delete { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public ICollection<Roof> Roof { get; set; }
    }
}
