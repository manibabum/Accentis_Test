using System;
using System.Collections.Generic;

namespace Accentis.Database.Domain.Domain
{
    public partial class RoofDetailElementConditions
    {
        public RoofDetailElementConditions()
        {
            ObservedDefects = new HashSet<ObservedDefects>();
        }

        public int Rdecid { get; set; }
        public int RoofId { get; set; }
        public string Inspector { get; set; }
        public string CurrentCondition { get; set; }
        public string Norm { get; set; }
        public string InspectionMethod { get; set; }
        public int Defacts { get; set; }
        public bool Restored { get; set; }
        public int Pictures { get; set; }
        public bool Edit { get; set; }
        public bool Delete { get; set; }
        public bool Status { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public Defacts DefactsNavigation { get; set; }
        public AspNetUsers InspectorNavigation { get; set; }
        public Roof Roof { get; set; }
        public ICollection<ObservedDefects> ObservedDefects { get; set; }
    }
}
