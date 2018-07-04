using System;
using System.Collections.Generic;

namespace Accentis.Database.Domain.Domain
{
    public partial class RoofAdviceMaintenance
    {
        public int AdviceId { get; set; }
        public int RoofId { get; set; }
        public string UserId { get; set; }
        public string Space { get; set; }
        public string Part { get; set; }
        public string Element { get; set; }
        public int Size { get; set; }
        public string Measure { get; set; }
        public double Cost { get; set; }
        public bool Executed { get; set; }
        public int Year { get; set; }
        public bool MaintenanceType { get; set; }
        public bool Status { get; set; }
        public bool Delete { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public Roof Roof { get; set; }
        public AspNetUsers User { get; set; }
    }
}
