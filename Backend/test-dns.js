const dns = require('dns');

const srvRecord = '_mongodb._tcp.cluster0.1j8hafp.mongodb.net';

console.log(`Resolving SRV record for: ${srvRecord}`);

dns.resolveSrv(srvRecord, (err, addresses) => {
  if (err) {
    console.error('DNS SRV Resolution Failed:', err.code, err.message);
    
    // Try resolving google.com to check general internet connectivity
    dns.lookup('google.com', (googleErr, googleAddr) => {
        if (googleErr) {
            console.error('Google.com Lookup Failed:', googleErr.code, googleErr.message);
        } else {
            console.log('Google.com resolved to:', googleAddr);
        }
    });

    dns.lookup('cluster0.1j8hafp.mongodb.net', (lookupErr, address, family) => {
        if (lookupErr) {
            console.error('Main Hostname Lookup Failed:', lookupErr.code, lookupErr.message);
        } else {
            console.log('Main Hostname resolved to:', address);
        }
    });
    return;
  }

  console.log('SRV Records found:');
  addresses.forEach((addr) => {
    console.log(`- ${addr.name}:${addr.port} (Priority: ${addr.priority}, Weight: ${addr.weight})`);
  });
});
