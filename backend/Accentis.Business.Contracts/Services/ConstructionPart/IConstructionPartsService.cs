using Accentis.Database.Domain.Domain;
using System.Collections.Generic;

namespace Accentis.Business.Contracts.Services.ConstructionPart
{
   public interface IConstructionPartsService
    {
        List<ConstructionParts> GetAllConstructionParts();

        List<ConstructionParts> Get();

        void CreateConstructionParts(ConstructionParts constructionParts);

        void UpdateConstructionParts(ConstructionParts constructionParts);

        ConstructionParts GetConstructionParts(int id);
    }
}
