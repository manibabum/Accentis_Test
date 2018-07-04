using System;
using System.Collections.Generic;

namespace Accentis.Database.Domain.Domain
{
    public partial class BuildingType
    {
        public BuildingType()
        {
            Building = new HashSet<Building>();
        }

        public int BuildingTypeId { get; set; }
        public string TypeName { get; set; }
        public bool Status { get; set; }
        public bool Delete { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public ICollection<Building> Building { get; set; }
    }
}
