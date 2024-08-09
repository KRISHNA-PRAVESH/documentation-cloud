#  Class GlobalIdToTenantMapperMapping

Namespace: [CloudManager.Models](CloudManager.Models.md)  
Assembly: CloudManager.dll  

```csharp
public class GlobalIdToTenantMapperMapping : ClassMapping<GlobalIdToTenantMapper>, IClassMapper<GlobalIdToTenantMapper>, IClassAttributesMapper<GlobalIdToTenantMapper>, IEntityAttributesMapper, IEntitySqlsMapper, IPropertyContainerMapper<GlobalIdToTenantMapper>, ICollectionPropertiesContainerMapper<GlobalIdToTenantMapper>, IPlainPropertyContainerMapper<GlobalIdToTenantMapper>, IBasePlainPropertyContainerMapper<GlobalIdToTenantMapper>, IMinimalPlainPropertyContainerMapper<GlobalIdToTenantMapper>, IConformistHoldersProvider, IApp
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
PropertyContainerCustomizer<GlobalIdToTenantMapper\> ← 
ClassCustomizer<GlobalIdToTenantMapper\> ← 
ClassMapping<GlobalIdToTenantMapper\> ← 
[GlobalIdToTenantMapperMapping](CloudManager.Models.GlobalIdToTenantMapperMapping.md)

#### Implements

IClassMapper<GlobalIdToTenantMapper\>, 
IClassAttributesMapper<GlobalIdToTenantMapper\>, 
IEntityAttributesMapper, 
IEntitySqlsMapper, 
IPropertyContainerMapper<GlobalIdToTenantMapper\>, 
ICollectionPropertiesContainerMapper<GlobalIdToTenantMapper\>, 
IPlainPropertyContainerMapper<GlobalIdToTenantMapper\>, 
IBasePlainPropertyContainerMapper<GlobalIdToTenantMapper\>, 
IMinimalPlainPropertyContainerMapper<GlobalIdToTenantMapper\>, 
IConformistHoldersProvider, 
IApp

#### Inherited Members

ClassCustomizer<GlobalIdToTenantMapper\>.Abstract\(bool\), 
ClassCustomizer<GlobalIdToTenantMapper\>.OptimisticLock\(OptimisticLockMode\), 
ClassCustomizer<GlobalIdToTenantMapper\>.Id<TProperty\>\(Expression<Func<GlobalIdToTenantMapper, TProperty\>\>\), 
ClassCustomizer<GlobalIdToTenantMapper\>.Id<TProperty\>\(Expression<Func<GlobalIdToTenantMapper, TProperty\>\>, Action<IIdMapper\>\), 
ClassCustomizer<GlobalIdToTenantMapper\>.Id\(string, Action<IIdMapper\>\), 
ClassCustomizer<GlobalIdToTenantMapper\>.ComponentAsId<TComponent\>\(Expression<Func<GlobalIdToTenantMapper, TComponent\>\>\), 
ClassCustomizer<GlobalIdToTenantMapper\>.ComponentAsId<TComponent\>\(Expression<Func<GlobalIdToTenantMapper, TComponent\>\>, Action<IComponentAsIdMapper<TComponent\>\>\), 
ClassCustomizer<GlobalIdToTenantMapper\>.ComponentAsId<TComponent\>\(string\), 
ClassCustomizer<GlobalIdToTenantMapper\>.ComponentAsId<TComponent\>\(string, Action<IComponentAsIdMapper<TComponent\>\>\), 
ClassCustomizer<GlobalIdToTenantMapper\>.ComposedId\(Action<IComposedIdMapper<GlobalIdToTenantMapper\>\>\), 
ClassCustomizer<GlobalIdToTenantMapper\>.Discriminator\(Action<IDiscriminatorMapper\>\), 
ClassCustomizer<GlobalIdToTenantMapper\>.DiscriminatorValue\(object\), 
ClassCustomizer<GlobalIdToTenantMapper\>.Table\(string\), 
ClassCustomizer<GlobalIdToTenantMapper\>.Check\(string\), 
ClassCustomizer<GlobalIdToTenantMapper\>.Catalog\(string\), 
ClassCustomizer<GlobalIdToTenantMapper\>.Schema\(string\), 
ClassCustomizer<GlobalIdToTenantMapper\>.Polymorphism\(PolymorphismType\), 
ClassCustomizer<GlobalIdToTenantMapper\>.Mutable\(bool\), 
ClassCustomizer<GlobalIdToTenantMapper\>.Version<TProperty\>\(Expression<Func<GlobalIdToTenantMapper, TProperty\>\>, Action<IVersionMapper\>\), 
ClassCustomizer<GlobalIdToTenantMapper\>.Version\(string, Action<IVersionMapper\>\), 
ClassCustomizer<GlobalIdToTenantMapper\>.NaturalId\(Action<IBasePlainPropertyContainerMapper<GlobalIdToTenantMapper\>\>, Action<INaturalIdAttributesMapper\>\), 
ClassCustomizer<GlobalIdToTenantMapper\>.NaturalId\(Action<IBasePlainPropertyContainerMapper<GlobalIdToTenantMapper\>\>\), 
ClassCustomizer<GlobalIdToTenantMapper\>.Cache\(Action<ICacheMapper\>\), 
ClassCustomizer<GlobalIdToTenantMapper\>.Filter\(string, Action<IFilterMapper\>\), 
ClassCustomizer<GlobalIdToTenantMapper\>.Where\(string\), 
ClassCustomizer<GlobalIdToTenantMapper\>.SchemaAction\(SchemaAction\), 
ClassCustomizer<GlobalIdToTenantMapper\>.Join\(string, Action<IJoinMapper<GlobalIdToTenantMapper\>\>\), 
ClassCustomizer<GlobalIdToTenantMapper\>.EntityName\(string\), 
ClassCustomizer<GlobalIdToTenantMapper\>.Proxy\(Type\), 
ClassCustomizer<GlobalIdToTenantMapper\>.Lazy\(bool\), 
ClassCustomizer<GlobalIdToTenantMapper\>.DynamicUpdate\(bool\), 
ClassCustomizer<GlobalIdToTenantMapper\>.DynamicInsert\(bool\), 
ClassCustomizer<GlobalIdToTenantMapper\>.BatchSize\(int\), 
ClassCustomizer<GlobalIdToTenantMapper\>.SelectBeforeUpdate\(bool\), 
ClassCustomizer<GlobalIdToTenantMapper\>.Persister<T\>\(\), 
ClassCustomizer<GlobalIdToTenantMapper\>.Synchronize\(params string\[\]\), 
ClassCustomizer<GlobalIdToTenantMapper\>.Loader\(string\), 
ClassCustomizer<GlobalIdToTenantMapper\>.SqlInsert\(string\), 
ClassCustomizer<GlobalIdToTenantMapper\>.SqlUpdate\(string\), 
ClassCustomizer<GlobalIdToTenantMapper\>.SqlDelete\(string\), 
ClassCustomizer<GlobalIdToTenantMapper\>.Subselect\(string\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.Property<TProperty\>\(Expression<Func<GlobalIdToTenantMapper, TProperty\>\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.Property<TProperty\>\(Expression<Func<GlobalIdToTenantMapper, TProperty\>\>, Action<IPropertyMapper\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.RegisterPropertyMapping<TProperty\>\(Expression<Func<GlobalIdToTenantMapper, TProperty\>\>, Action<IPropertyMapper\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.Property\(string, Action<IPropertyMapper\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.RegisterNoVisiblePropertyMapping\(string, Action<IPropertyMapper\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.RegistePropertyMapping\(Action<IPropertyMapper\>, params MemberInfo\[\]\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.Component<TComponent\>\(Expression<Func<GlobalIdToTenantMapper, TComponent\>\>, Action<IComponentMapper<TComponent\>\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.Component<TComponent\>\(Expression<Func<GlobalIdToTenantMapper, TComponent\>\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.RegisterComponentMapping<TComponent\>\(Expression<Func<GlobalIdToTenantMapper, TComponent\>\>, Action<IComponentMapper<TComponent\>\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.RegisterComponentMapping<TComponent\>\(Action<IComponentMapper<TComponent\>\>, params MemberInfo\[\]\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.Component<TComponent\>\(Expression<Func<GlobalIdToTenantMapper, IDictionary\>\>, TComponent, Action<IDynamicComponentMapper<TComponent\>\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.Component<TComponent\>\(Expression<Func<GlobalIdToTenantMapper, IDictionary<string, object\>\>\>, TComponent, Action<IDynamicComponentMapper<TComponent\>\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.RegisterDynamicComponentMapping<TComponent\>\(Expression<Func<GlobalIdToTenantMapper, IDictionary\>\>, Action<IDynamicComponentMapper<TComponent\>\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.RegisterDynamicComponentMapping<TComponent\>\(Expression<Func<GlobalIdToTenantMapper, IDictionary<string, object\>\>\>, Action<IDynamicComponentMapper<TComponent\>\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.RegisterDynamicComponentMapping<TComponent\>\(Action<IDynamicComponentMapper<TComponent\>\>, params MemberInfo\[\]\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.ManyToOne<TProperty\>\(Expression<Func<GlobalIdToTenantMapper, TProperty\>\>, Action<IManyToOneMapper\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.RegisterManyToOneMapping<TProperty\>\(Expression<Func<GlobalIdToTenantMapper, TProperty\>\>, Action<IManyToOneMapper\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.RegisterManyToOneMapping<TProperty\>\(Action<IManyToOneMapper\>, params MemberInfo\[\]\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.ManyToOne<TProperty\>\(Expression<Func<GlobalIdToTenantMapper, TProperty\>\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.OneToOne<TProperty\>\(Expression<Func<GlobalIdToTenantMapper, TProperty\>\>, Action<IOneToOneMapper<TProperty\>\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.OneToOne<TProperty\>\(string, Action<IOneToOneMapper<TProperty\>\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.RegisterOneToOneMapping<TProperty\>\(Action<IOneToOneMapper<TProperty\>\>, params MemberInfo\[\]\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.Any<TProperty\>\(Expression<Func<GlobalIdToTenantMapper, TProperty\>\>, Type, Action<IAnyMapper\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.RegisterAnyMapping<TProperty\>\(Expression<Func<GlobalIdToTenantMapper, TProperty\>\>, Type, Action<IAnyMapper\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.RegisterAnyMapping<TProperty\>\(Action<IAnyMapper\>, Type, params MemberInfo\[\]\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.Set<TElement\>\(Expression<Func<GlobalIdToTenantMapper, IEnumerable<TElement\>\>\>, Action<ISetPropertiesMapper<GlobalIdToTenantMapper, TElement\>\>, Action<ICollectionElementRelation<TElement\>\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.Set<TElement\>\(Expression<Func<GlobalIdToTenantMapper, IEnumerable<TElement\>\>\>, Action<ISetPropertiesMapper<GlobalIdToTenantMapper, TElement\>\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.RegisterSetMapping<TElement\>\(Expression<Func<GlobalIdToTenantMapper, IEnumerable<TElement\>\>\>, Action<ISetPropertiesMapper<GlobalIdToTenantMapper, TElement\>\>, Action<ICollectionElementRelation<TElement\>\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.RegisterSetMapping<TElement\>\(Action<ISetPropertiesMapper<GlobalIdToTenantMapper, TElement\>\>, Action<ICollectionElementRelation<TElement\>\>, params MemberInfo\[\]\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.Bag<TElement\>\(Expression<Func<GlobalIdToTenantMapper, IEnumerable<TElement\>\>\>, Action<IBagPropertiesMapper<GlobalIdToTenantMapper, TElement\>\>, Action<ICollectionElementRelation<TElement\>\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.Bag<TElement\>\(Expression<Func<GlobalIdToTenantMapper, IEnumerable<TElement\>\>\>, Action<IBagPropertiesMapper<GlobalIdToTenantMapper, TElement\>\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.RegisterBagMapping<TElement\>\(Expression<Func<GlobalIdToTenantMapper, IEnumerable<TElement\>\>\>, Action<IBagPropertiesMapper<GlobalIdToTenantMapper, TElement\>\>, Action<ICollectionElementRelation<TElement\>\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.RegisterBagMapping<TElement\>\(Action<IBagPropertiesMapper<GlobalIdToTenantMapper, TElement\>\>, Action<ICollectionElementRelation<TElement\>\>, params MemberInfo\[\]\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.List<TElement\>\(Expression<Func<GlobalIdToTenantMapper, IEnumerable<TElement\>\>\>, Action<IListPropertiesMapper<GlobalIdToTenantMapper, TElement\>\>, Action<ICollectionElementRelation<TElement\>\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.List<TElement\>\(Expression<Func<GlobalIdToTenantMapper, IEnumerable<TElement\>\>\>, Action<IListPropertiesMapper<GlobalIdToTenantMapper, TElement\>\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.RegisterListMapping<TElement\>\(Expression<Func<GlobalIdToTenantMapper, IEnumerable<TElement\>\>\>, Action<IListPropertiesMapper<GlobalIdToTenantMapper, TElement\>\>, Action<ICollectionElementRelation<TElement\>\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.RegisterListMapping<TElement\>\(Action<IListPropertiesMapper<GlobalIdToTenantMapper, TElement\>\>, Action<ICollectionElementRelation<TElement\>\>, params MemberInfo\[\]\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.Map<TKey, TElement\>\(Expression<Func<GlobalIdToTenantMapper, IDictionary<TKey, TElement\>\>\>, Action<IMapPropertiesMapper<GlobalIdToTenantMapper, TKey, TElement\>\>, Action<IMapKeyRelation<TKey\>\>, Action<ICollectionElementRelation<TElement\>\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.Map<TKey, TElement\>\(Expression<Func<GlobalIdToTenantMapper, IDictionary<TKey, TElement\>\>\>, Action<IMapPropertiesMapper<GlobalIdToTenantMapper, TKey, TElement\>\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.RegisterMapMapping<TKey, TElement\>\(Expression<Func<GlobalIdToTenantMapper, IDictionary<TKey, TElement\>\>\>, Action<IMapPropertiesMapper<GlobalIdToTenantMapper, TKey, TElement\>\>, Action<IMapKeyRelation<TKey\>\>, Action<ICollectionElementRelation<TElement\>\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.RegisterMapMapping<TKey, TElement\>\(Action<IMapPropertiesMapper<GlobalIdToTenantMapper, TKey, TElement\>\>, Action<IMapKeyRelation<TKey\>\>, Action<ICollectionElementRelation<TElement\>\>, params MemberInfo\[\]\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.Map<TKey, TElement\>\(Expression<Func<GlobalIdToTenantMapper, IDictionary<TKey, TElement\>\>\>, Action<IMapPropertiesMapper<GlobalIdToTenantMapper, TKey, TElement\>\>, Action<ICollectionElementRelation<TElement\>\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.IdBag<TElement\>\(Expression<Func<GlobalIdToTenantMapper, IEnumerable<TElement\>\>\>, Action<IIdBagPropertiesMapper<GlobalIdToTenantMapper, TElement\>\>, Action<ICollectionElementRelation<TElement\>\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.IdBag<TElement\>\(Expression<Func<GlobalIdToTenantMapper, IEnumerable<TElement\>\>\>, Action<IIdBagPropertiesMapper<GlobalIdToTenantMapper, TElement\>\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.RegisterIdBagMapping<TElement\>\(Expression<Func<GlobalIdToTenantMapper, IEnumerable<TElement\>\>\>, Action<IIdBagPropertiesMapper<GlobalIdToTenantMapper, TElement\>\>, Action<ICollectionElementRelation<TElement\>\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.RegisterIdBagMapping<TElement\>\(Action<IIdBagPropertiesMapper<GlobalIdToTenantMapper, TElement\>\>, Action<ICollectionElementRelation<TElement\>\>, params MemberInfo\[\]\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.Set<TElement\>\(string, Action<ISetPropertiesMapper<GlobalIdToTenantMapper, TElement\>\>, Action<ICollectionElementRelation<TElement\>\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.Set<TElement\>\(string, Action<ISetPropertiesMapper<GlobalIdToTenantMapper, TElement\>\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.Bag<TElement\>\(string, Action<IBagPropertiesMapper<GlobalIdToTenantMapper, TElement\>\>, Action<ICollectionElementRelation<TElement\>\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.Bag<TElement\>\(string, Action<IBagPropertiesMapper<GlobalIdToTenantMapper, TElement\>\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.List<TElement\>\(string, Action<IListPropertiesMapper<GlobalIdToTenantMapper, TElement\>\>, Action<ICollectionElementRelation<TElement\>\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.List<TElement\>\(string, Action<IListPropertiesMapper<GlobalIdToTenantMapper, TElement\>\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.Map<TKey, TElement\>\(string, Action<IMapPropertiesMapper<GlobalIdToTenantMapper, TKey, TElement\>\>, Action<IMapKeyRelation<TKey\>\>, Action<ICollectionElementRelation<TElement\>\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.Map<TKey, TElement\>\(string, Action<IMapPropertiesMapper<GlobalIdToTenantMapper, TKey, TElement\>\>, Action<ICollectionElementRelation<TElement\>\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.Map<TKey, TElement\>\(string, Action<IMapPropertiesMapper<GlobalIdToTenantMapper, TKey, TElement\>\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.IdBag<TElement\>\(string, Action<IIdBagPropertiesMapper<GlobalIdToTenantMapper, TElement\>\>, Action<ICollectionElementRelation<TElement\>\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.IdBag<TElement\>\(string, Action<IIdBagPropertiesMapper<GlobalIdToTenantMapper, TElement\>\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.ManyToOne<TProperty\>\(string, Action<IManyToOneMapper\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.Component<TComponent\>\(string, Action<IComponentMapper<TComponent\>\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.Component<TComponent\>\(string\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.Component<TComponent\>\(string, TComponent, Action<IDynamicComponentMapper<TComponent\>\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.Any<TProperty\>\(string, Type, Action<IAnyMapper\>\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.GetPropertyOrFieldMatchingNameOrThrow\(string\), 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.CustomizersHolder, 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.PropertyPath, 
PropertyContainerCustomizer<GlobalIdToTenantMapper\>.ExplicitDeclarationsHolder, 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

###  GlobalIdToTenantMapperMapping\(\)

```csharp
public GlobalIdToTenantMapperMapping()
```

