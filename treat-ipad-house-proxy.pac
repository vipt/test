function FindProxyForURL(url, host) {
    if (isInNet(host, "10.11.22.0", "255.255.255.0")) {
        return "SOCKS 169.254.88.86:1080";
    }
    return "DIRECT";
}
