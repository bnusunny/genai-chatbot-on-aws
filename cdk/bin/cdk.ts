import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import * as blueprints from '@aws-quickstart/eks-blueprints';

const app = new cdk.App();

// AddOns for the cluster.
const addOns: Array<blueprints.ClusterAddOn> = [
    new blueprints.addons.ArgoCDAddOn,
    new blueprints.addons.MetricsServerAddOn,
    new blueprints.addons.KarpenterAddOn,
    new blueprints.addons.AwsLoadBalancerControllerAddOn(),
    new blueprints.addons.VpcCniAddOn(),
    new blueprints.addons.CoreDnsAddOn(),
    new blueprints.addons.KubeProxyAddOn(),
    new blueprints.addons.XrayAddOn(),
    new blueprints.addons.EbsCsiDriverAddOn(),
    new blueprints.addons.EfsCsiDriverAddOn(),
    // new blueprints.addons.JupyterHubAddOn(),
];

const account = '373534280245';
const region = 'us-west-2';

const stack = blueprints.EksBlueprint.builder()
    .account(account)
    .region(region)
    .addOns(...addOns)
    .build(app, 'genai-demo');
// do something with stack or drop this variable