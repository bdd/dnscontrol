D("foo.com", "none",
    NAPTR("@", 100, 10, "U", "E2U+sip", "!^.*$!sip:customer-service@example.com!", "example"),
    NAPTR("@", 102, 10, "U", "E2U+email", "!^.*$!mailto:information@example.com!", "example"),
    NAPTR("@", 103, 10, "U", "E2U+email", "!^.*$!mailto:information@example.com!", ""),
    NAPTR("@", 104, 10, "U", "E2U+email", "!^.*$!mailto:information@example.com!", "."),
);
