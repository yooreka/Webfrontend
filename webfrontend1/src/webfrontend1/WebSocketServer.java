package webfrontend1;

import java.util.ArrayList;
import java.util.List;

import javax.websocket.OnClose;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

//주소 생성
//ws://192.168.0.200:9000/webfrontend0611/chat
@ServerEndpoint("/chat")
public class WebSocketServer {
	//클라이언트 목록을 저장할 List를 생성
	//Session이 클라이언트 1개
	private static List<Session> list = 
		new ArrayList<>();
	
	//open 이벤트 처리
	@OnOpen
	public void onOpen(Session session) {
		//list에 클라이언트 추가
		list.add(session);
		System.out.println(list.size() + "명 접속 중");
	}
	//접속 해제 이벤트 처리
	@OnClose
    
		public void onClose(Session session) {
			//세션에서 클라이언트 제거
			list.remove(session);
			System.out.println(
				list.size() + " 접속 중");	
			}
//메세지가 온경우 이벤트 처리
	@OnMessage
	public void onMessage(String message, Session session) {
		//메세지를 list의 모든 클라이언트에게 전송
		for(Session s : list) {
			try {
				s.getBasicRemote().sendText(message);
			}catch(Exception e) {
				System.out.println(e.getMessage());
			}
		}
	}
}
