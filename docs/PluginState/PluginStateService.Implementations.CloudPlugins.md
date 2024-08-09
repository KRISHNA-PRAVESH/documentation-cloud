#  Class CloudPlugins

Namespace: [PluginStateService.Implementations](PluginStateService.Implementations.md)  
Assembly: PluginStateService.dll  

```csharp
public abstract class CloudPlugins : SchedularImpl, ICloudPlugin
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SchedularTrigger](PluginStateService.Implementations.SchedularTrigger.md) ← 
[SchedularImpl](PluginStateService.Implementations.SchedularImpl.md) ← 
[CloudPlugins](PluginStateService.Implementations.CloudPlugins.md)

#### Derived

[AppPlugins](PluginStateService.AppPlugins.md)

#### Implements

[ICloudPlugin](PluginStateService.Abstractions.ICloudPlugin.md)

#### Inherited Members

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

## Fields

###  RegisteredPlugins

```csharp
public static Dictionary<Type, CloudPlugins> RegisteredPlugins
```

#### Field Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[Type](https://learn.microsoft.com/dotnet/api/system.type), [CloudPlugins](PluginStateService.Implementations.CloudPlugins.md)\>

## Properties

###  IsOnErrorState

```csharp
public bool IsOnErrorState { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

###  CreateInitFile\(\)

```csharp
public bool CreateInitFile()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  Defaults\(\)

```csharp
public string Defaults()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  GetAppOnlineTime\(\)

```csharp
public int GetAppOnlineTime()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

###  GetInitFilePath\(\)

```csharp
public string GetInitFilePath()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  GetJobFilePath\(\)

```csharp
public string GetJobFilePath()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  GetPluginDirectory\(\)

```csharp
public string GetPluginDirectory()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  GetPluginName\(\)

```csharp
public string GetPluginName()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  GetRestartFilePath\(\)

```csharp
public string GetRestartFilePath()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  RegisterPlugin<T\>\(string, string?\)

```csharp
public abstract SchedularImpl RegisterPlugin<T>(string name, string? pluginRootDir = null) where T : ICloudPluginStateController
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`pluginRootDir` [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Returns

 [SchedularImpl](PluginStateService.Implementations.SchedularImpl.md)

#### Type Parameters

`T` 

###  RegisterPluginGlobal<T\>\(string, string?\)

```csharp
public SchedularImpl RegisterPluginGlobal<T>(string name, string? pluginRootDir = null) where T : ICloudPluginStateController
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`pluginRootDir` [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Returns

 [SchedularImpl](PluginStateService.Implementations.SchedularImpl.md)

#### Type Parameters

`T` 

###  ScheduleJob\(PeriodType, int, int, int, int, int, int\)

```csharp
public override SchedularTrigger ScheduleJob(PeriodType periodType, int hour, int minutes, int date, int weekdays, int dailyIntervalHourOrMinute = 24, int startOffset = 0)
```

#### Parameters

`periodType` [PeriodType](PluginStateService.Quartz.PeriodType.md)

`hour` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`minutes` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`date` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`weekdays` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`dailyIntervalHourOrMinute` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`startOffset` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [SchedularTrigger](PluginStateService.Implementations.SchedularTrigger.md)

###  Trigger\(Action\)

```csharp
public override void Trigger(Action exexcutor)
```

#### Parameters

`exexcutor` [Action](https://learn.microsoft.com/dotnet/api/system.action)

###  UpdateJobFile\(string\)

```csharp
public bool UpdateJobFile(string nextFireTime)
```

#### Parameters

`nextFireTime` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  UpdateRestartFile\(string\)

```csharp
public bool UpdateRestartFile(string msg)
```

#### Parameters

`msg` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  isFirstTime\(\)

```csharp
public bool isFirstTime()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

