
namespace Accentis.Business.Model
{
    public class ResponseDetail
    {
        public string Message { get; set; }

        public bool Success { get; set; }

        public object access_token { get; set; }

        public object Data { get; set; }

        //public MessageType MessageType { get; set; }
    }
}
