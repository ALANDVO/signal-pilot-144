from fastapi.testclient import TestClient
from backend.app import app

client = TestClient(app)

def test_health():
    '''Health endpoint returns OK.'''
    response = client.get('/health')
    assert response.status_code == 200
    assert response.json() == {'status': 'ok'}

def test_agent():
    '''Agent stub returns message.'''
    response = client.get('/agent')
    assert response.status_code == 200
    assert response.json() == {'message': 'Agent ready'}

def test_reverse():
    '''Reverse endpoint reverses text.'''
    # Test reversing "hello"
    response = client.get('/reverse?text=hello')
    assert response.status_code == 200
    assert response.json() == {'reversed': 'olleh'}
    # Test empty text
    response = client.get('/reverse')
    assert response.status_code == 200
    assert response.json() == {'reversed': ''}
