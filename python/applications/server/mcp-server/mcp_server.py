from mcp.server import Server

# Tạo một MCP server
server = Server("python-mcp-server")

@server.tool("hello")
def say_hello(name: str) -> str:
    return f"Hello, {name}! This is MCP Python server."

# server.add_tool("hello", say_hello)

if __name__ == "__main__":
    server.run()
