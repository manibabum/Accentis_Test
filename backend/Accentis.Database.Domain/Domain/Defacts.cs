using System;
using System.Collections.Generic;

namespace Accentis.Database.Domain.Domain
{
    public partial class Defacts
    {
        public Defacts()
        {
            RoofDetailElementConditions = new HashSet<RoofDetailElementConditions>();
        }

        public int DefactId { get; set; }
        public string Description { get; set; }
        public bool Status { get; set; }
        public bool Delete { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public ICollection<RoofDetailElementConditions> RoofDetailElementConditions { get; set; }
    }
}
