using System;
using System.Collections.Generic;

namespace Accentis.Database.Domain.Domain
{
    public partial class RoofConstruction
    {
        public RoofConstruction()
        {
            ElementConstructions = new HashSet<ElementConstructions>();
        }

        public int Rsid { get; set; }
        public int RoofId { get; set; }
        public string Part { get; set; }
        public string TypeOfConstruction { get; set; }
        public DateTime DateRecording { get; set; }
        public string Inspector { get; set; }
        public string Explanation { get; set; }
        public bool Status { get; set; }
        public bool Delete { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public AspNetUsers InspectorNavigation { get; set; }
        public Roof Roof { get; set; }
        public ICollection<ElementConstructions> ElementConstructions { get; set; }
    }
}
