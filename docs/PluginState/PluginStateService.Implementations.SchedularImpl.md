#  Class SchedularImpl

Namespace: [PluginStateService.Implementations](PluginStateService.Implementations.md)  
Assembly: PluginStateService.dll  

```csharp
public abstract class SchedularImpl : SchedularTrigger
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SchedularTrigger](PluginStateService.Implementations.SchedularTrigger.md) ← 
[SchedularImpl](PluginStateService.Implementations.SchedularImpl.md)

#### Derived

[CloudPlugins](PluginStateService.Implementations.CloudPlugins.md)

#### Inherited Members

[SchedularTrigger.Trigger\(Action\)](PluginStateService.Implementations.SchedularTrigger.md\#PluginStateService\_Implementations\_SchedularTrigger\_Trigger\_System\_Action\_), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

###  ScheduleJob\(PeriodType, int, int, int, int, int, int\)

```csharp
public abstract SchedularTrigger ScheduleJob(PeriodType periodType, int hour, int minutes, int date, int weekdays, int dailyIntervalHourOrMinute = 24, int startOffset = 0)
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
public override abstract void Trigger(Action exexcutor)
```

#### Parameters

`exexcutor` [Action](https://learn.microsoft.com/dotnet/api/system.action)

