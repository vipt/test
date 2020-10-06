function FindProxyForURL(url, host) {
    if (isInNet(host, "10.11.22.0", "255.255.255.0")) {
        return "SOCKS 192.168.179.2:1080";
    }
    return "DIRECT";
}
