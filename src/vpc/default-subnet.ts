// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS VPC
*/
export interface DefaultSubnetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#availability_zone DefaultSubnet#availability_zone}
  */
  readonly availabilityZone: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#customer_owned_ipv4_pool DefaultSubnet#customer_owned_ipv4_pool}
  */
  readonly customerOwnedIpv4Pool?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#enable_dns64 DefaultSubnet#enable_dns64}
  */
  readonly enableDns64?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#enable_resource_name_dns_a_record_on_launch DefaultSubnet#enable_resource_name_dns_a_record_on_launch}
  */
  readonly enableResourceNameDnsARecordOnLaunch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#enable_resource_name_dns_aaaa_record_on_launch DefaultSubnet#enable_resource_name_dns_aaaa_record_on_launch}
  */
  readonly enableResourceNameDnsAaaaRecordOnLaunch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#ipv6_native DefaultSubnet#ipv6_native}
  */
  readonly ipv6Native?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#map_customer_owned_ip_on_launch DefaultSubnet#map_customer_owned_ip_on_launch}
  */
  readonly mapCustomerOwnedIpOnLaunch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#map_public_ip_on_launch DefaultSubnet#map_public_ip_on_launch}
  */
  readonly mapPublicIpOnLaunch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#outpost_arn DefaultSubnet#outpost_arn}
  */
  readonly outpostArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#private_dns_hostname_type_on_launch DefaultSubnet#private_dns_hostname_type_on_launch}
  */
  readonly privateDnsHostnameTypeOnLaunch?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#tags DefaultSubnet#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#tags_all DefaultSubnet#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#timeouts DefaultSubnet#timeouts}
  */
  readonly timeouts?: DefaultSubnetTimeouts;
}
export interface DefaultSubnetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#create DefaultSubnet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#delete DefaultSubnet#delete}
  */
  readonly delete?: string;
}

export function defaultSubnetTimeoutsToTerraform(struct?: DefaultSubnetTimeoutsOutputReference | DefaultSubnetTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class DefaultSubnetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DefaultSubnetTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultSubnetTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_subnet aws_default_subnet}
*/
export class DefaultSubnet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_default_subnet";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/default_subnet aws_default_subnet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultSubnetConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultSubnetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_default_subnet',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityZone = config.availabilityZone;
    this._customerOwnedIpv4Pool = config.customerOwnedIpv4Pool;
    this._enableDns64 = config.enableDns64;
    this._enableResourceNameDnsARecordOnLaunch = config.enableResourceNameDnsARecordOnLaunch;
    this._enableResourceNameDnsAaaaRecordOnLaunch = config.enableResourceNameDnsAaaaRecordOnLaunch;
    this._ipv6Native = config.ipv6Native;
    this._mapCustomerOwnedIpOnLaunch = config.mapCustomerOwnedIpOnLaunch;
    this._mapPublicIpOnLaunch = config.mapPublicIpOnLaunch;
    this._outpostArn = config.outpostArn;
    this._privateDnsHostnameTypeOnLaunch = config.privateDnsHostnameTypeOnLaunch;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // assign_ipv6_address_on_creation - computed: true, optional: false, required: false
  public get assignIpv6AddressOnCreation() {
    return this.getBooleanAttribute('assign_ipv6_address_on_creation') as any;
  }

  // availability_zone - computed: false, optional: false, required: true
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // availability_zone_id - computed: true, optional: false, required: false
  public get availabilityZoneId() {
    return this.getStringAttribute('availability_zone_id');
  }

  // cidr_block - computed: true, optional: false, required: false
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }

  // customer_owned_ipv4_pool - computed: false, optional: true, required: false
  private _customerOwnedIpv4Pool?: string; 
  public get customerOwnedIpv4Pool() {
    return this.getStringAttribute('customer_owned_ipv4_pool');
  }
  public set customerOwnedIpv4Pool(value: string) {
    this._customerOwnedIpv4Pool = value;
  }
  public resetCustomerOwnedIpv4Pool() {
    this._customerOwnedIpv4Pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerOwnedIpv4PoolInput() {
    return this._customerOwnedIpv4Pool;
  }

  // enable_dns64 - computed: false, optional: true, required: false
  private _enableDns64?: boolean | cdktf.IResolvable; 
  public get enableDns64() {
    return this.getBooleanAttribute('enable_dns64') as any;
  }
  public set enableDns64(value: boolean | cdktf.IResolvable) {
    this._enableDns64 = value;
  }
  public resetEnableDns64() {
    this._enableDns64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDns64Input() {
    return this._enableDns64;
  }

  // enable_resource_name_dns_a_record_on_launch - computed: false, optional: true, required: false
  private _enableResourceNameDnsARecordOnLaunch?: boolean | cdktf.IResolvable; 
  public get enableResourceNameDnsARecordOnLaunch() {
    return this.getBooleanAttribute('enable_resource_name_dns_a_record_on_launch') as any;
  }
  public set enableResourceNameDnsARecordOnLaunch(value: boolean | cdktf.IResolvable) {
    this._enableResourceNameDnsARecordOnLaunch = value;
  }
  public resetEnableResourceNameDnsARecordOnLaunch() {
    this._enableResourceNameDnsARecordOnLaunch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableResourceNameDnsARecordOnLaunchInput() {
    return this._enableResourceNameDnsARecordOnLaunch;
  }

  // enable_resource_name_dns_aaaa_record_on_launch - computed: false, optional: true, required: false
  private _enableResourceNameDnsAaaaRecordOnLaunch?: boolean | cdktf.IResolvable; 
  public get enableResourceNameDnsAaaaRecordOnLaunch() {
    return this.getBooleanAttribute('enable_resource_name_dns_aaaa_record_on_launch') as any;
  }
  public set enableResourceNameDnsAaaaRecordOnLaunch(value: boolean | cdktf.IResolvable) {
    this._enableResourceNameDnsAaaaRecordOnLaunch = value;
  }
  public resetEnableResourceNameDnsAaaaRecordOnLaunch() {
    this._enableResourceNameDnsAaaaRecordOnLaunch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableResourceNameDnsAaaaRecordOnLaunchInput() {
    return this._enableResourceNameDnsAaaaRecordOnLaunch;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv6_cidr_block - computed: true, optional: false, required: false
  public get ipv6CidrBlock() {
    return this.getStringAttribute('ipv6_cidr_block');
  }

  // ipv6_cidr_block_association_id - computed: true, optional: false, required: false
  public get ipv6CidrBlockAssociationId() {
    return this.getStringAttribute('ipv6_cidr_block_association_id');
  }

  // ipv6_native - computed: false, optional: true, required: false
  private _ipv6Native?: boolean | cdktf.IResolvable; 
  public get ipv6Native() {
    return this.getBooleanAttribute('ipv6_native') as any;
  }
  public set ipv6Native(value: boolean | cdktf.IResolvable) {
    this._ipv6Native = value;
  }
  public resetIpv6Native() {
    this._ipv6Native = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NativeInput() {
    return this._ipv6Native;
  }

  // map_customer_owned_ip_on_launch - computed: false, optional: true, required: false
  private _mapCustomerOwnedIpOnLaunch?: boolean | cdktf.IResolvable; 
  public get mapCustomerOwnedIpOnLaunch() {
    return this.getBooleanAttribute('map_customer_owned_ip_on_launch') as any;
  }
  public set mapCustomerOwnedIpOnLaunch(value: boolean | cdktf.IResolvable) {
    this._mapCustomerOwnedIpOnLaunch = value;
  }
  public resetMapCustomerOwnedIpOnLaunch() {
    this._mapCustomerOwnedIpOnLaunch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapCustomerOwnedIpOnLaunchInput() {
    return this._mapCustomerOwnedIpOnLaunch;
  }

  // map_public_ip_on_launch - computed: true, optional: true, required: false
  private _mapPublicIpOnLaunch?: boolean | cdktf.IResolvable; 
  public get mapPublicIpOnLaunch() {
    return this.getBooleanAttribute('map_public_ip_on_launch') as any;
  }
  public set mapPublicIpOnLaunch(value: boolean | cdktf.IResolvable) {
    this._mapPublicIpOnLaunch = value;
  }
  public resetMapPublicIpOnLaunch() {
    this._mapPublicIpOnLaunch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapPublicIpOnLaunchInput() {
    return this._mapPublicIpOnLaunch;
  }

  // outpost_arn - computed: false, optional: true, required: false
  private _outpostArn?: string; 
  public get outpostArn() {
    return this.getStringAttribute('outpost_arn');
  }
  public set outpostArn(value: string) {
    this._outpostArn = value;
  }
  public resetOutpostArn() {
    this._outpostArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outpostArnInput() {
    return this._outpostArn;
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // private_dns_hostname_type_on_launch - computed: true, optional: true, required: false
  private _privateDnsHostnameTypeOnLaunch?: string; 
  public get privateDnsHostnameTypeOnLaunch() {
    return this.getStringAttribute('private_dns_hostname_type_on_launch');
  }
  public set privateDnsHostnameTypeOnLaunch(value: string) {
    this._privateDnsHostnameTypeOnLaunch = value;
  }
  public resetPrivateDnsHostnameTypeOnLaunch() {
    this._privateDnsHostnameTypeOnLaunch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateDnsHostnameTypeOnLaunchInput() {
    return this._privateDnsHostnameTypeOnLaunch;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DefaultSubnetTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DefaultSubnetTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      customer_owned_ipv4_pool: cdktf.stringToTerraform(this._customerOwnedIpv4Pool),
      enable_dns64: cdktf.booleanToTerraform(this._enableDns64),
      enable_resource_name_dns_a_record_on_launch: cdktf.booleanToTerraform(this._enableResourceNameDnsARecordOnLaunch),
      enable_resource_name_dns_aaaa_record_on_launch: cdktf.booleanToTerraform(this._enableResourceNameDnsAaaaRecordOnLaunch),
      ipv6_native: cdktf.booleanToTerraform(this._ipv6Native),
      map_customer_owned_ip_on_launch: cdktf.booleanToTerraform(this._mapCustomerOwnedIpOnLaunch),
      map_public_ip_on_launch: cdktf.booleanToTerraform(this._mapPublicIpOnLaunch),
      outpost_arn: cdktf.stringToTerraform(this._outpostArn),
      private_dns_hostname_type_on_launch: cdktf.stringToTerraform(this._privateDnsHostnameTypeOnLaunch),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      timeouts: defaultSubnetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}