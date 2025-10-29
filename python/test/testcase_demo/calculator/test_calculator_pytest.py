# Đây là ví dụ đơn giản với pytest
# Và dưới đây là test case được viết bằng pytext

from calculator import add, divide
import pytest

def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0
    assert add(5, 2) != 10

def test_divide():
    assert divide(10, 2) == 5
    with pytest.raises(ValueError):
        divide(5, 0)
