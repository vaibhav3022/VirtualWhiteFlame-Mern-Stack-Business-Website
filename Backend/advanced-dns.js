const dns = require('dns').promises;

const target = 'cluster0.1j8hafp.mongodb.net';
const resolvers = [
    { name: 'Default', resolver: null },
    { name: 'Google (8.8.8.8)', resolver: '8.8.8.8' },
    { name: 'Cloudflare (1.1.1.1)', resolver: '1.1.1.1' }
];

async function testResolver(name, ip) {
    const resolver = new dns.Resolver();
    if (ip) resolver.setServers([ip]);
    
    console.log(`--- Testing ${name} ---`);
    try {
        const start = Date.now();
        const addresses = await (ip ? resolver.resolve4(target) : dns.resolve4(target));
        console.log(`✅ Success: ${addresses.join(', ')} (${Date.now() - start}ms)`);
        return true;
    } catch (err) {
        console.error(`❌ Failed: ${err.code} - ${err.message}`);
        return false;
    }
}

async function testSrv(name, ip) {
    const resolver = new dns.Resolver();
    if (ip) resolver.setServers([ip]);
    const srvTarget = `_mongodb._tcp.${target}`;
    
    console.log(`--- Testing SRV via ${name} ---`);
    try {
        const addresses = await (ip ? resolver.resolveSrv(srvTarget) : dns.resolveSrv(srvTarget));
        console.log(`✅ Success: Found ${addresses.length} SRV records`);
        return true;
    } catch (err) {
        console.error(`❌ Failed: ${err.code} - ${err.message}`);
        return false;
    }
}

async function run() {
    console.log(`Target: ${target}\n`);
    for (const r of resolvers) {
        await testResolver(r.name, r.resolver);
        await testSrv(r.name, r.resolver);
        console.log('');
    }
}

run();
