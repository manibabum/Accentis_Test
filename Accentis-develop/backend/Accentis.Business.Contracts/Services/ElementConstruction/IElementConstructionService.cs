using Accentis.Database.Domain.Domain;
using System.Collections.Generic;

namespace Accentis.Business.Contracts.Services.ElementConstruction
{
    public interface IElementConstructionService
    {
        void CreateElementConstruction(ElementConstructions elementConstructions);

        void UpdateElementConstruction(ElementConstructions elementConstructions);

        ElementConstructions GetElementConstruction(int id);

        List<ElementConstructions> GetAllElementConstructions();

        List<ElementConstructions> Get();
    }
}
