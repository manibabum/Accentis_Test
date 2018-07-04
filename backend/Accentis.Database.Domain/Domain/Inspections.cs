using System;
using System.Collections.Generic;

namespace Accentis.Database.Domain.Domain
{
    public partial class Inspections
    {
        public Inspections()
        {
            Roof = new HashSet<Roof>();
        }

        public int InspectionId { get; set; }
        public int BuildingId { get; set; }
        public string UserId { get; set; }
        public string Description { get; set; }
        public DateTime Date { get; set; }
        public bool Status { get; set; }
        public bool Delete { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public Building Building { get; set; }
        public AspNetUsers User { get; set; }
        public ICollection<Roof> Roof { get; set; }
    }
}
