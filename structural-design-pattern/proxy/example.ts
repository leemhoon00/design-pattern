interface DatabaseService {
  executeSQL(sqlQuery: string): string;
}

class DatabaseService implements DatabaseService {
  executeSQL(sqlQuery: string): string {
    // 실제 데이터베이스 쿼리 로직
    return "Data from the database (SQL query: " + sqlQuery + ")";
  }
}

// 프록시 클래스
class DatabaseServiceProxy implements DatabaseService {
  private databaseService: DatabaseService | null = null;

  executeSQL(sqlQuery: string): string {
    // 프록시를 사용하여 필요한 경우에만 실제 객체를 생성
    if (!this.databaseService) {
      this.databaseService = new DatabaseService();
    }

    // 실제 객체에 작업 위임
    return this.databaseService.executeSQL(sqlQuery);
  }
}

// 프록시 사용
const proxyService = new DatabaseServiceProxy();
console.log(proxyService.executeSQL("SELECT * FROM users"));
