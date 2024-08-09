#  Class AppPlugins

Namespace: [PluginStateService](PluginStateService.md)  
Assembly: PluginStateService.dll  

```csharp
public class AppPlugins : CloudPlugins, ICloudPlugin
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SchedularTrigger](PluginStateService.Implementations.SchedularTrigger.md) ← 
[SchedularImpl](PluginStateService.Implementations.SchedularImpl.md) ← 
[CloudPlugins](PluginStateService.Implementations.CloudPlugins.md) ← 
[AppPlugins](PluginStateService.AppPlugins.md)

#### Implements

[ICloudPlugin](PluginStateService.Abstractions.ICloudPlugin.md)

#### Inherited Members

[CloudPlugins.RegisteredPlugins](PluginStateService.Implementations.CloudPlugins.md\#PluginStateService\_Implementations\_CloudPlugins\_RegisteredPlugins), 
[CloudPlugins.IsOnErrorState](PluginStateService.Implementations.CloudPlugins.md\#PluginStateService\_Implementations\_CloudPlugins\_IsOnErrorState), 
[CloudPlugins.RegisterPlugin<T\>\(string, string?\)](PluginStateService.Implementations.CloudPlugins.md\#PluginStateService\_Implementations\_CloudPlugins\_RegisterPlugin\_\_1\_System\_String\_System\_String\_), 
[CloudPlugins.RegisterPluginGlobal<T\>\(string, string?\)](PluginStateService.Implementations.CloudPlugins.md\#PluginStateService\_Implementations\_CloudPlugins\_RegisterPluginGlobal\_\_1\_System\_String\_System\_String\_), 
[CloudPlugins.ScheduleJob\(PeriodType, int, int, int, int, int, int\)](PluginStateService.Implementations.CloudPlugins.md\#PluginStateService\_Implementations\_CloudPlugins\_ScheduleJob\_PluginStateService\_Quartz\_PeriodType\_System\_Int32\_System\_Int32\_System\_Int32\_System\_Int32\_System\_Int32\_System\_Int32\_), 
[CloudPlugins.Trigger\(Action\)](PluginStateService.Implementations.CloudPlugins.md\#PluginStateService\_Implementations\_CloudPlugins\_Trigger\_System\_Action\_), 
[CloudPlugins.GetPluginDirectory\(\)](PluginStateService.Implementations.CloudPlugins.md\#PluginStateService\_Implementations\_CloudPlugins\_GetPluginDirectory), 
[CloudPlugins.Defaults\(\)](PluginStateService.Implementations.CloudPlugins.md\#PluginStateService\_Implementations\_CloudPlugins\_Defaults), 
[CloudPlugins.GetPluginName\(\)](PluginStateService.Implementations.CloudPlugins.md\#PluginStateService\_Implementations\_CloudPlugins\_GetPluginName), 
[CloudPlugins.isFirstTime\(\)](PluginStateService.Implementations.CloudPlugins.md\#PluginStateService\_Implementations\_CloudPlugins\_isFirstTime), 
[CloudPlugins.GetInitFilePath\(\)](PluginStateService.Implementations.CloudPlugins.md\#PluginStateService\_Implementations\_CloudPlugins\_GetInitFilePath), 
[CloudPlugins.GetRestartFilePath\(\)](PluginStateService.Implementations.CloudPlugins.md\#PluginStateService\_Implementations\_CloudPlugins\_GetRestartFilePath), 
[CloudPlugins.CreateInitFile\(\)](PluginStateService.Implementations.CloudPlugins.md\#PluginStateService\_Implementations\_CloudPlugins\_CreateInitFile), 
[CloudPlugins.GetJobFilePath\(\)](PluginStateService.Implementations.CloudPlugins.md\#PluginStateService\_Implementations\_CloudPlugins\_GetJobFilePath), 
[CloudPlugins.UpdateJobFile\(string\)](PluginStateService.Implementations.CloudPlugins.md\#PluginStateService\_Implementations\_CloudPlugins\_UpdateJobFile\_System\_String\_), 
[CloudPlugins.UpdateRestartFile\(string\)](PluginStateService.Implementations.CloudPlugins.md\#PluginStateService\_Implementations\_CloudPlugins\_UpdateRestartFile\_System\_String\_), 
[CloudPlugins.GetAppOnlineTime\(\)](PluginStateService.Implementations.CloudPlugins.md\#PluginStateService\_Implementations\_CloudPlugins\_GetAppOnlineTime), 
[SchedularImpl.ScheduleJob\(PeriodType, int, int, int, int, int, int\)](PluginStateService.Implementations.SchedularImpl.md\#PluginStateService\_Implementations\_SchedularImpl\_ScheduleJob\_PluginStateService\_Quartz\_PeriodType\_System\_Int32\_System\_Int32\_System\_Int32\_System\_Int32\_System\_Int32\_System\_Int32\_), 
[SchedularImpl.Trigger\(Action\)](PluginStateService.Implementations.SchedularImpl.md\#PluginStateService\_Implementations\_SchedularImpl\_Trigger\_System\_Action\_), 
[SchedularTrigger.Trigger\(Action\)](PluginStateService.Implementations.SchedularTrigger.md\#PluginStateService\_Implementations\_SchedularTrigger\_Trigger\_System\_Action\_), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

###  Register<T\>\(string, string\)

```csharp
public static SchedularImpl Register<T>(string name, string pluginRootDir = null) where T : ICloudPluginStateController
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`pluginRootDir` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [SchedularImpl](PluginStateService.Implementations.SchedularImpl.md)

#### Type Parameters

`T` 

###  RegisterPlugin<T\>\(string, string\)

```csharp
public override SchedularImpl RegisterPlugin<T>(string name, string pluginRootDir = null) where T : ICloudPluginStateController
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`pluginRootDir` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [SchedularImpl](PluginStateService.Implementations.SchedularImpl.md)

#### Type Parameters

`T` 

