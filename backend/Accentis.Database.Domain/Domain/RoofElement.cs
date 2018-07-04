using System;
using System.Collections.Generic;

namespace Accentis.Database.Domain.Domain
{
    public partial class RoofElement
    {
        public int Reid { get; set; }
        public int RoofId { get; set; }
        public string Part { get; set; }
        public string Element { get; set; }
        public int Size { get; set; }
        public int Share { get; set; }
        public DateTime Date { get; set; }
        public string StandardCondition { get; set; }
        public string CurrentCondition { get; set; }
        public bool Status { get; set; }
        public bool Delete { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public Roof Roof { get; set; }
    }
}
