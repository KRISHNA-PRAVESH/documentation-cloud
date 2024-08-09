#  Class AccountMap

Namespace: [CloudCore.Models](CloudCore.Models.md)  
Assembly: CloudCore.dll  

```csharp
public class AccountMap : MonitoringEntityMapping<Account>, IClassMapper<Account>, IClassAttributesMapper<Account>, IEntityAttributesMapper, IEntitySqlsMapper, IPropertyContainerMapper<Account>, ICollectionPropertiesContainerMapper<Account>, IPlainPropertyContainerMapper<Account>, IBasePlainPropertyContainerMapper<Account>, IMinimalPlainPropertyContainerMapper<Account>, IConformistHoldersProvider, IEntitySqlsWithCheckMapper, ITenant
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
PropertyContainerCustomizer<Account\> ← 
ClassCustomizer<Account\> ← 
MonitoringEntityMapping<Account\> ← 
[AccountMap](CloudCore.Models.AccountMap.md)

#### Implements

IClassMapper<Account\>, 
IClassAttributesMapper<Account\>, 
IEntityAttributesMapper, 
IEntitySqlsMapper, 
IPropertyContainerMapper<Account\>, 
ICollectionPropertiesContainerMapper<Account\>, 
IPlainPropertyContainerMapper<Account\>, 
IBasePlainPropertyContainerMapper<Account\>, 
IMinimalPlainPropertyContainerMapper<Account\>, 
IConformistHoldersProvider, 
IEntitySqlsWithCheckMapper, 
ITenant

#### Inherited Members

ClassCustomizer<Account\>.Abstract\(bool\), 
ClassCustomizer<Account\>.OptimisticLock\(OptimisticLockMode\), 
ClassCustomizer<Account\>.Id<TProperty\>\(Expression<Func<Account, TProperty\>\>\), 
ClassCustomizer<Account\>.Id<TProperty\>\(Expression<Func<Account, TProperty\>\>, Action<IIdMapper\>\), 
ClassCustomizer<Account\>.Id\(string, Action<IIdMapper\>\), 
ClassCustomizer<Account\>.ComponentAsId<TComponent\>\(Expression<Func<Account, TComponent\>\>\), 
ClassCustomizer<Account\>.ComponentAsId<TComponent\>\(Expression<Func<Account, TComponent\>\>, Action<IComponentAsIdMapper<TComponent\>\>\), 
ClassCustomizer<Account\>.ComponentAsId<TComponent\>\(string\), 
ClassCustomizer<Account\>.ComponentAsId<TComponent\>\(string, Action<IComponentAsIdMapper<TComponent\>\>\), 
ClassCustomizer<Account\>.ComposedId\(Action<IComposedIdMapper<Account\>\>\), 
ClassCustomizer<Account\>.Discriminator\(Action<IDiscriminatorMapper\>\), 
ClassCustomizer<Account\>.DiscriminatorValue\(object\), 
ClassCustomizer<Account\>.Table\(string\), 
ClassCustomizer<Account\>.Check\(string\), 
ClassCustomizer<Account\>.Catalog\(string\), 
ClassCustomizer<Account\>.Schema\(string\), 
ClassCustomizer<Account\>.Polymorphism\(PolymorphismType\), 
ClassCustomizer<Account\>.Mutable\(bool\), 
ClassCustomizer<Account\>.Version<TProperty\>\(Expression<Func<Account, TProperty\>\>, Action<IVersionMapper\>\), 
ClassCustomizer<Account\>.Version\(string, Action<IVersionMapper\>\), 
ClassCustomizer<Account\>.NaturalId\(Action<IBasePlainPropertyContainerMapper<Account\>\>, Action<INaturalIdAttributesMapper\>\), 
ClassCustomizer<Account\>.NaturalId\(Action<IBasePlainPropertyContainerMapper<Account\>\>\), 
ClassCustomizer<Account\>.Cache\(Action<ICacheMapper\>\), 
ClassCustomizer<Account\>.Filter\(string, Action<IFilterMapper\>\), 
ClassCustomizer<Account\>.Where\(string\), 
ClassCustomizer<Account\>.SchemaAction\(SchemaAction\), 
ClassCustomizer<Account\>.Join\(string, Action<IJoinMapper<Account\>\>\), 
ClassCustomizer<Account\>.EntityName\(string\), 
ClassCustomizer<Account\>.Proxy\(Type\), 
ClassCustomizer<Account\>.Lazy\(bool\), 
ClassCustomizer<Account\>.DynamicUpdate\(bool\), 
ClassCustomizer<Account\>.DynamicInsert\(bool\), 
ClassCustomizer<Account\>.BatchSize\(int\), 
ClassCustomizer<Account\>.SelectBeforeUpdate\(bool\), 
ClassCustomizer<Account\>.Persister<T\>\(\), 
ClassCustomizer<Account\>.Synchronize\(params string\[\]\), 
ClassCustomizer<Account\>.Loader\(string\), 
ClassCustomizer<Account\>.SqlInsert\(string\), 
ClassCustomizer<Account\>.SqlInsert\(string, SqlCheck\), 
ClassCustomizer<Account\>.SqlUpdate\(string\), 
ClassCustomizer<Account\>.SqlUpdate\(string, SqlCheck\), 
ClassCustomizer<Account\>.SqlDelete\(string\), 
ClassCustomizer<Account\>.SqlDelete\(string, SqlCheck\), 
ClassCustomizer<Account\>.Subselect\(string\), 
PropertyContainerCustomizer<Account\>.Property<TProperty\>\(Expression<Func<Account, TProperty\>\>\), 
PropertyContainerCustomizer<Account\>.Property<TProperty\>\(Expression<Func<Account, TProperty\>\>, Action<IPropertyMapper\>\), 
PropertyContainerCustomizer<Account\>.RegisterPropertyMapping<TProperty\>\(Expression<Func<Account, TProperty\>\>, Action<IPropertyMapper\>\), 
PropertyContainerCustomizer<Account\>.Property\(string, Action<IPropertyMapper\>\), 
PropertyContainerCustomizer<Account\>.RegisterNoVisiblePropertyMapping\(string, Action<IPropertyMapper\>\), 
PropertyContainerCustomizer<Account\>.RegistePropertyMapping\(Action<IPropertyMapper\>, params MemberInfo\[\]\), 
PropertyContainerCustomizer<Account\>.Component<TComponent\>\(Expression<Func<Account, TComponent\>\>, Action<IComponentMapper<TComponent\>\>\), 
PropertyContainerCustomizer<Account\>.Component<TComponent\>\(Expression<Func<Account, TComponent\>\>\), 
PropertyContainerCustomizer<Account\>.RegisterComponentMapping<TComponent\>\(Expression<Func<Account, TComponent\>\>, Action<IComponentMapper<TComponent\>\>\), 
PropertyContainerCustomizer<Account\>.RegisterComponentMapping<TComponent\>\(Action<IComponentMapper<TComponent\>\>, params MemberInfo\[\]\), 
PropertyContainerCustomizer<Account\>.Component<TComponent\>\(Expression<Func<Account, IDictionary\>\>, TComponent, Action<IDynamicComponentMapper<TComponent\>\>\), 
PropertyContainerCustomizer<Account\>.Component<TComponent\>\(Expression<Func<Account, IDictionary<string, object\>\>\>, TComponent, Action<IDynamicComponentMapper<TComponent\>\>\), 
PropertyContainerCustomizer<Account\>.RegisterDynamicComponentMapping<TComponent\>\(Expression<Func<Account, IDictionary\>\>, Action<IDynamicComponentMapper<TComponent\>\>\), 
PropertyContainerCustomizer<Account\>.RegisterDynamicComponentMapping<TComponent\>\(Expression<Func<Account, IDictionary\>\>, Type, Action<IDynamicComponentMapper<TComponent\>\>\), 
PropertyContainerCustomizer<Account\>.RegisterDynamicComponentMapping<TComponent\>\(Expression<Func<Account, IDictionary<string, object\>\>\>, Action<IDynamicComponentMapper<TComponent\>\>\), 
PropertyContainerCustomizer<Account\>.RegisterDynamicComponentMapping<TComponent\>\(Expression<Func<Account, IDictionary<string, object\>\>\>, Type, Action<IDynamicComponentMapper<TComponent\>\>\), 
PropertyContainerCustomizer<Account\>.RegisterDynamicComponentMapping<TComponent\>\(Type, Action<IDynamicComponentMapper<TComponent\>\>, params MemberInfo\[\]\), 
PropertyContainerCustomizer<Account\>.RegisterDynamicComponentMapping<TComponent\>\(Action<IDynamicComponentMapper<TComponent\>\>, params MemberInfo\[\]\), 
PropertyContainerCustomizer<Account\>.ManyToOne<TProperty\>\(Expression<Func<Account, TProperty\>\>, Action<IManyToOneMapper\>\), 
PropertyContainerCustomizer<Account\>.RegisterManyToOneMapping<TProperty\>\(Expression<Func<Account, TProperty\>\>, Action<IManyToOneMapper\>\), 
PropertyContainerCustomizer<Account\>.RegisterManyToOneMapping<TProperty\>\(Action<IManyToOneMapper\>, params MemberInfo\[\]\), 
PropertyContainerCustomizer<Account\>.ManyToOne<TProperty\>\(Expression<Func<Account, TProperty\>\>\), 
PropertyContainerCustomizer<Account\>.OneToOne<TProperty\>\(Expression<Func<Account, TProperty\>\>, Action<IOneToOneMapper<TProperty\>\>\), 
PropertyContainerCustomizer<Account\>.OneToOne<TProperty\>\(string, Action<IOneToOneMapper<TProperty\>\>\), 
PropertyContainerCustomizer<Account\>.RegisterOneToOneMapping<TProperty\>\(Action<IOneToOneMapper<TProperty\>\>, params MemberInfo\[\]\), 
PropertyContainerCustomizer<Account\>.Any<TProperty\>\(Expression<Func<Account, TProperty\>\>, Type, Action<IAnyMapper\>\), 
PropertyContainerCustomizer<Account\>.RegisterAnyMapping<TProperty\>\(Expression<Func<Account, TProperty\>\>, Type, Action<IAnyMapper\>\), 
PropertyContainerCustomizer<Account\>.RegisterAnyMapping<TProperty\>\(Action<IAnyMapper\>, Type, params MemberInfo\[\]\), 
PropertyContainerCustomizer<Account\>.Set<TElement\>\(Expression<Func<Account, IEnumerable<TElement\>\>\>, Action<ISetPropertiesMapper<Account, TElement\>\>, Action<ICollectionElementRelation<TElement\>\>\), 
PropertyContainerCustomizer<Account\>.Set<TElement\>\(Expression<Func<Account, IEnumerable<TElement\>\>\>, Action<ISetPropertiesMapper<Account, TElement\>\>\), 
PropertyContainerCustomizer<Account\>.RegisterSetMapping<TElement\>\(Expression<Func<Account, IEnumerable<TElement\>\>\>, Action<ISetPropertiesMapper<Account, TElement\>\>, Action<ICollectionElementRelation<TElement\>\>\), 
PropertyContainerCustomizer<Account\>.RegisterSetMapping<TElement\>\(Action<ISetPropertiesMapper<Account, TElement\>\>, Action<ICollectionElementRelation<TElement\>\>, params MemberInfo\[\]\), 
PropertyContainerCustomizer<Account\>.Bag<TElement\>\(Expression<Func<Account, IEnumerable<TElement\>\>\>, Action<IBagPropertiesMapper<Account, TElement\>\>, Action<ICollectionElementRelation<TElement\>\>\), 
PropertyContainerCustomizer<Account\>.Bag<TElement\>\(Expression<Func<Account, IEnumerable<TElement\>\>\>, Action<IBagPropertiesMapper<Account, TElement\>\>\), 
PropertyContainerCustomizer<Account\>.RegisterBagMapping<TElement\>\(Expression<Func<Account, IEnumerable<TElement\>\>\>, Action<IBagPropertiesMapper<Account, TElement\>\>, Action<ICollectionElementRelation<TElement\>\>\), 
PropertyContainerCustomizer<Account\>.RegisterBagMapping<TElement\>\(Action<IBagPropertiesMapper<Account, TElement\>\>, Action<ICollectionElementRelation<TElement\>\>, params MemberInfo\[\]\), 
PropertyContainerCustomizer<Account\>.List<TElement\>\(Expression<Func<Account, IEnumerable<TElement\>\>\>, Action<IListPropertiesMapper<Account, TElement\>\>, Action<ICollectionElementRelation<TElement\>\>\), 
PropertyContainerCustomizer<Account\>.List<TElement\>\(Expression<Func<Account, IEnumerable<TElement\>\>\>, Action<IListPropertiesMapper<Account, TElement\>\>\), 
PropertyContainerCustomizer<Account\>.RegisterListMapping<TElement\>\(Expression<Func<Account, IEnumerable<TElement\>\>\>, Action<IListPropertiesMapper<Account, TElement\>\>, Action<ICollectionElementRelation<TElement\>\>\), 
PropertyContainerCustomizer<Account\>.RegisterListMapping<TElement\>\(Action<IListPropertiesMapper<Account, TElement\>\>, Action<ICollectionElementRelation<TElement\>\>, params MemberInfo\[\]\), 
PropertyContainerCustomizer<Account\>.Map<TKey, TElement\>\(Expression<Func<Account, IDictionary<TKey, TElement\>\>\>, Action<IMapPropertiesMapper<Account, TKey, TElement\>\>, Action<IMapKeyRelation<TKey\>\>, Action<ICollectionElementRelation<TElement\>\>\), 
PropertyContainerCustomizer<Account\>.Map<TKey, TElement\>\(Expression<Func<Account, IDictionary<TKey, TElement\>\>\>, Action<IMapPropertiesMapper<Account, TKey, TElement\>\>\), 
PropertyContainerCustomizer<Account\>.RegisterMapMapping<TKey, TElement\>\(Expression<Func<Account, IDictionary<TKey, TElement\>\>\>, Action<IMapPropertiesMapper<Account, TKey, TElement\>\>, Action<IMapKeyRelation<TKey\>\>, Action<ICollectionElementRelation<TElement\>\>\), 
PropertyContainerCustomizer<Account\>.RegisterMapMapping<TKey, TElement\>\(Action<IMapPropertiesMapper<Account, TKey, TElement\>\>, Action<IMapKeyRelation<TKey\>\>, Action<ICollectionElementRelation<TElement\>\>, params MemberInfo\[\]\), 
PropertyContainerCustomizer<Account\>.Map<TKey, TElement\>\(Expression<Func<Account, IDictionary<TKey, TElement\>\>\>, Action<IMapPropertiesMapper<Account, TKey, TElement\>\>, Action<ICollectionElementRelation<TElement\>\>\), 
PropertyContainerCustomizer<Account\>.IdBag<TElement\>\(Expression<Func<Account, IEnumerable<TElement\>\>\>, Action<IIdBagPropertiesMapper<Account, TElement\>\>, Action<ICollectionElementRelation<TElement\>\>\), 
PropertyContainerCustomizer<Account\>.IdBag<TElement\>\(Expression<Func<Account, IEnumerable<TElement\>\>\>, Action<IIdBagPropertiesMapper<Account, TElement\>\>\), 
PropertyContainerCustomizer<Account\>.RegisterIdBagMapping<TElement\>\(Expression<Func<Account, IEnumerable<TElement\>\>\>, Action<IIdBagPropertiesMapper<Account, TElement\>\>, Action<ICollectionElementRelation<TElement\>\>\), 
PropertyContainerCustomizer<Account\>.RegisterIdBagMapping<TElement\>\(Action<IIdBagPropertiesMapper<Account, TElement\>\>, Action<ICollectionElementRelation<TElement\>\>, params MemberInfo\[\]\), 
PropertyContainerCustomizer<Account\>.Set<TElement\>\(string, Action<ISetPropertiesMapper<Account, TElement\>\>, Action<ICollectionElementRelation<TElement\>\>\), 
PropertyContainerCustomizer<Account\>.Set<TElement\>\(string, Action<ISetPropertiesMapper<Account, TElement\>\>\), 
PropertyContainerCustomizer<Account\>.Bag<TElement\>\(string, Action<IBagPropertiesMapper<Account, TElement\>\>, Action<ICollectionElementRelation<TElement\>\>\), 
PropertyContainerCustomizer<Account\>.Bag<TElement\>\(string, Action<IBagPropertiesMapper<Account, TElement\>\>\), 
PropertyContainerCustomizer<Account\>.List<TElement\>\(string, Action<IListPropertiesMapper<Account, TElement\>\>, Action<ICollectionElementRelation<TElement\>\>\), 
PropertyContainerCustomizer<Account\>.List<TElement\>\(string, Action<IListPropertiesMapper<Account, TElement\>\>\), 
PropertyContainerCustomizer<Account\>.Map<TKey, TElement\>\(string, Action<IMapPropertiesMapper<Account, TKey, TElement\>\>, Action<IMapKeyRelation<TKey\>\>, Action<ICollectionElementRelation<TElement\>\>\), 
PropertyContainerCustomizer<Account\>.Map<TKey, TElement\>\(string, Action<IMapPropertiesMapper<Account, TKey, TElement\>\>, Action<ICollectionElementRelation<TElement\>\>\), 
PropertyContainerCustomizer<Account\>.Map<TKey, TElement\>\(string, Action<IMapPropertiesMapper<Account, TKey, TElement\>\>\), 
PropertyContainerCustomizer<Account\>.IdBag<TElement\>\(string, Action<IIdBagPropertiesMapper<Account, TElement\>\>, Action<ICollectionElementRelation<TElement\>\>\), 
PropertyContainerCustomizer<Account\>.IdBag<TElement\>\(string, Action<IIdBagPropertiesMapper<Account, TElement\>\>\), 
PropertyContainerCustomizer<Account\>.ManyToOne<TProperty\>\(string, Action<IManyToOneMapper\>\), 
PropertyContainerCustomizer<Account\>.Component<TComponent\>\(string, Action<IComponentMapper<TComponent\>\>\), 
PropertyContainerCustomizer<Account\>.Component<TComponent\>\(string\), 
PropertyContainerCustomizer<Account\>.Component<TComponent\>\(string, TComponent, Action<IDynamicComponentMapper<TComponent\>\>\), 
PropertyContainerCustomizer<Account\>.Any<TProperty\>\(string, Type, Action<IAnyMapper\>\), 
PropertyContainerCustomizer<Account\>.GetRequiredPropertyOrFieldByName\(string\), 
PropertyContainerCustomizer<Account\>.GetPropertyOrFieldMatchingNameOrThrow\(string\), 
PropertyContainerCustomizer<Account\>.CustomizersHolder, 
PropertyContainerCustomizer<Account\>.PropertyPath, 
PropertyContainerCustomizer<Account\>.ExplicitDeclarationsHolder, 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

###  AccountMap\(\)

```csharp
public AccountMap()
```

