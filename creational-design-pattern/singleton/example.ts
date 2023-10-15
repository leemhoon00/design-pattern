class Database {
  // 싱글턴 인스턴스를 저장하기 위해선 정적 필드를 사용
  private static database: Database;
  // 생성자를 private으로 선언하여 외부에서 인스턴스를 생성하지 못하도록 함
  private constructor() {
    // 실제 데이터베이스 연결 코드
  }

  // 외부에서 싱글턴 인스턴스를 참조할 수 있는 정적 메서드
  // 이 싱글턴 인스턴스를 사용하는 곳들은 모두 같은 인스턴스를 사용하게 됨
  public static getDatabase(): Database {
    if (!Database.database) {
      Database.database = new Database();
    }
    return Database.database;
  }

  // 모든 SQL문은 이 싱글턴 객체를 통해 실행됨
  public query(sql: string): void {
    // 데이터베이스 연결 여부 확인
    console.log(`SQL: ${sql}`);
  }
}
