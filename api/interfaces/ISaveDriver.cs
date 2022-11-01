using mis321pa3.api.models;
namespace mis321pa3.api.interfaces
{
    public interface ISaveDriver
    {
        public void CreateDriver(Driver myDriver);
        public void SaveDriver(Driver myDriver);
    }
}