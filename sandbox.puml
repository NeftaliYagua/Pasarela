@startuml
package com.mgm.investments.backend.controllers.api.reports {
  abstract class ReportsAbstractController {
    + ReportsAbstractController()
  }
}
package com.mgm.investments.backend.model.dto.socket {
  class Greeting {
    - content : String
    + Greeting()
    + Greeting(content : String)
    + getContent() : String
  }
  class HelloMessage {
    - name : String
    + HelloMessage()
    + HelloMessage(name : String)
    + getName() : String
    + setName(name : String)
  }
}
package com.mgm.investments.backend.model.dto.jpa {
  class Account {
    - accountingGroup : AccountingGroup
    - name : String
    + Account()
  }
  class AccountingGroup {
    - name : String
    + AccountingGroup()
  }
  class Budget {
    - cashflow : Boolean
    - project : Project
    + Budget()
  }
  class BudgetDepreciation {
    - budget : Budget
    - from : Integer
    - to : Integer
    - value : Double
    + BudgetDepreciation()
  }
  class BudgetGeneration {
    - budget : Budget
    - from : Integer
    - to : Integer
    - value : Double
    + BudgetGeneration()
  }
  class BudgetInterests {
    - budget : Budget
    - from : Integer
    - to : Integer
    - value : Double
    + BudgetInterests()
  }
  class BudgetOthers {
    - budget : Budget
    - from : Integer
    - to : Integer
    - value : Double
    + BudgetOthers()
  }
  class BudgetPaymentOfCapital {
    - budget : Budget
    - from : Integer
    - to : Integer
    + BudgetPaymentOfCapital()
  }
  class BudgetTariff {
    - budget : Budget
    - from : Integer
    - to : Integer
    - value : Double
    + BudgetTariff()
  }
  class CashFlow {
    - date : LocalDate
    - msefRr : Double
    - project : Project
    + CashFlow()
  }
  class City {
    - department : Department
    - name : String
    + City()
  }
  class CompanyIdentificationType {
    - name : String
    + CompanyIdentificationType()
  }
  class ContractType {
    - name : String
    + ContractType()
  }
  class ConvertibleDebtInvestment {
    - budget : Budget
    - end : LocalDateTime
    - start : LocalDateTime
    + ConvertibleDebtInvestment()
  }
  class ConvertibleDebtSimulation {
    - budget : Budget
    - called : LocalDateTime
    - conversion : LocalDateTime
    - exit : LocalDateTime
    - loanPayment : LocalDateTime
    - numberDaysInPeriod : Integer
    - periodStart : LocalDateTime
    - periodStartEvaluation : LocalDateTime
    - principalInception : Double
    - valuation : LocalDateTime
    + ConvertibleDebtSimulation()
  }
  class Country {
    - name : String
    + Country()
  }
  class CurrencyType {
    - name : String
    + CurrencyType()
  }
  class Department {
    - country : Country
    - name : String
    + Department()
  }
  class DocumentType {
    - name : String
    + DocumentType()
  }
  class DueDiligenceApproval {
    - amount : Double
    - approver : String
    - date : LocalDate
    - name : String
    - observations : String
    - project : Project
    + DueDiligenceApproval()
  }
  class DueDiligenceDoc {
    - date : LocalDate
    - document : String
    - observations : String
    - project : Project
    + DueDiligenceDoc()
  }
  abstract class EntityAbstract {
    # createdAt : LocalDateTime
    # id : Long
    # updatedAt : LocalDateTime
    + EntityAbstract()
    + EntityAbstract(id : Long, createdAt : LocalDateTime, updatedAt : LocalDateTime)
    + equals(obj : Object) : boolean
    + getCreatedAt() : LocalDateTime
    + getId() : Long
    + getUpdatedAt() : LocalDateTime
    + hashCode() : int
    + setCreatedAt(createdAt : LocalDateTime)
    + setId(id : Long)
    + setUpdatedAt(updatedAt : LocalDateTime)
    + toString() : String
  }
  class Entry {
    - budget : Budget
    - called : LocalDateTime
    - conversion : LocalDateTime
    - description : LocalDateTime
    - exit : LocalDateTime
    - name : LocalDateTime
    - numberDaysInPeriod : Integer
    - periodStart : LocalDateTime
    - periodStartEvaluation : LocalDateTime
    - taxonomy : Taxonomy
    + Entry()
  }
  class EntryRule {
    - entry : Entry
    - name : String
    - rule : Rule
    + EntryRule()
  }
  class EquipmentLeasingInvestment {
    - budget : Budget
    - currencyType : String
    + EquipmentLeasingInvestment()
  }
  class EquipmentLeasingSimulation {
    - budget : Budget
    - end : LocalDateTime
    - numberOfInstallments : Double
    + EquipmentLeasingSimulation()
  }
  class FrequencyType {
    - frecuencyRule : String
    - name : Integer
    + FrequencyType()
  }
  class Fund {
    - code : String
    - commitment : Double
    - description : String
    - expected : Double
    - finalClosing : LocalDateTime
    - findClose : LocalDateTime
    - firstClose : LocalDateTime
    - fundStart : LocalDateTime
    - invested : Double
    - name : String
    - projectedCommitment : Double
    + Fund()
  }
  class FundProject {
    - fund : Fund
    - project : Project
    + FundProject()
  }
  class IdentificationType {
    - name : String
    + IdentificationType()
  }
  class InvestmentPlan {
    - budget : Budget
    - currencyType : CurrencyType
    - end : LocalDateTime
    - start : LocalDateTime
    + InvestmentPlan()
  }
  class LoanDisbursenmentInvestment {
    - approved : Double
    - budget : Budget
    + LoanDisbursenmentInvestment()
  }
  class LoanDisbursenmentItems {
    - approved : Double
    - loanDisbursenment : LoanDisbursenmentInvestment
    + LoanDisbursenmentItems()
  }
  class LoansSimulation {
    - approval : LocalDateTime
    - budget : Budget
    - payment : LocalDateTime
    + LoansSimulation()
  }
  class Location {
    - city : City
    - name : String
    + Location()
  }
  class Macroeconomy {
    - description : String
    - name : String
    + Macroeconomy()
  }
  class PaymentPlan {
    - budget : Budget
    - startDate : Double
    + PaymentPlan()
  }
  class PeriodicalEvaluation {
    - discountRate : Integer
    - end : LocalDateTime
    - project : Project
    - start : LocalDateTime
    + PeriodicalEvaluation()
  }
  class ProductPerformance {
    - actual : Double
    - concept : String
    - estimated : Double
    - project : Project
    + ProductPerformance()
  }
  class Project {
    - amount : Double
    - capitalCommitments : Double
    - code : String
    - contractType : ContractType
    - description : String
    - disinvestm : LocalDateTime
    - dueDiligenceBudget : Double
    - explanation : String
    - extectedExit : LocalDateTime
    - finalInvestment : LocalDateTime
    - ghgEmisionsReduced : Double
    - implementation : LocalDateTime
    - initialInvestment : LocalDateTime
    - investment : LocalDateTime
    - irrIcApproval : Double
    - location : Location
    - monitoring : LocalDateTime
    - name : String
    - observations : String
    - projectStart : LocalDateTime
    - projectStatus : ProjectStatus
    - projectType : ProjectType
    - realizationMultiple : Double
    - responsible : String
    - sector : Sector
    - valueOfInitialProjectBudget : Double
    + Project()
  }
  class ProjectActivity {
    - date : LocalDateTime
    - name : String
    - project : Project
    + ProjectActivity()
  }
  class ProjectApproval {
    - approval : LocalDate
    - approver : String
    - project : Project
    - score : Integer
    + ProjectApproval()
  }
  class ProjectClient {
    - address : String
    - email : String
    - identification : Integer
    - identificationType : IdentificationType
    - location : Location
    - name : String
    - project : Project
    - telephone : Integer
    + ProjectClient()
  }
  class ProjectCompany {
    - address : String
    - companyIdentificationType : CompanyIdentificationType
    - email : String
    - identification : Integer
    - location : Location
    - name : String
    - project : Project
    - telephone : Integer
    + ProjectCompany()
  }
  class ProjectMacroeconomic {
    - macroeconomy : Macroeconomy
    - project : Project
    + ProjectMacroeconomic()
  }
  class ProjectOwner {
    - documentType : DocumentType
    - firstName : String
    - identification : Integer
    - lastName : String
    - project : Project
    + ProjectOwner()
  }
  class ProjectStatus {
    - name : String
    + ProjectStatus()
  }
  class ProjectType {
    - name : String
    + ProjectType()
  }
  class Recurrency {
    - end : LocalDateTime
    - frequencyType : FrequencyType
    - start : LocalDateTime
    + Recurrency()
  }
  class Risk {
    - description : String
    - name : String
    - project : Project
    + Risk()
  }
  class Rule {
    - enforcement : String
    - name : String
    - parent : Rule
    - recurrence : Recurrency
    - rule : String
    - ruleType : RuleType
    + Rule()
  }
  class RuleType {
    - accountingGroup : AccountingGroup
    - description : String
    - name : String
    + RuleType()
  }
  class SaleOfServiceInvestment {
    - budget : Budget
    - currencyType : String
    - end : LocalDateTime
    + SaleOfServiceInvestment()
  }
  class SaleOfServiceSimulation {
    - budget : Budget
    - end : LocalDateTime
    - numberOfInstallments : Double
    - start : LocalDateTime
    + SaleOfServiceSimulation()
  }
  class Sector {
    - name : String
    + Sector()
  }
  class Taxonomy {
    - account : Account
    - name : String
    - taxonomy : Taxonomy
    + Taxonomy()
  }
  class TaxonomyRule {
    - name : String
    - rule : Rule
    - taxonomy : Taxonomy
    + TaxonomyRule()
  }
  class ThecnicalEvaluation {
    - _return : Double
    - project : Project
    - revenued : Double
    + ThecnicalEvaluation()
  }
}
package com.mgm.investments.backend.controllers.api.settings {
  abstract class SettingsAbstractController {
    + SettingsAbstractController()
  }
}
package com.mgm.investments.backend.controllers.api.companies {
  abstract class CompaniesAbstractController {
    + CompaniesAbstractController()
  }
}
package com.mgm.investments.backend.controllers.api.contracts {
  abstract class ContractsAbstractController {
    + ContractsAbstractController()
  }
}
package com.mgm.investments.backend.model.dto.security {
  class ActivityLog {
    - batchUUID : UUID
    - causerId : Long
    - causerType : String
    - description : String
    - logName : String
    - subjectId : Long
    - subjectType : String
    + ActivityLog()
  }
  class Authority {
    - authority : String
    - id : Long
    - username : String
    + Authority()
    + getAuthority() : String
    + getId() : Long
    + getUsername() : String
    + setAuthority(authority : String)
    + setId(id : Long)
    + setUsername(username : String)
  }
  class Group {
    - groupName : String
    + Group()
  }
  class GroupAuthority {
    - authority : String
    - group : Group
    + GroupAuthority()
  }
  class GroupHasPermision {
    - group : Group
    - permission : Permission
    + GroupHasPermision()
  }
  class GroupInvitation {
    - email : String
    - group : Group
    - role : String
    + GroupInvitation()
  }
  class GroupMember {
    - group : Group
    - id : Long
    - username : String
    + GroupMember()
  }
  class GroupUser {
    - group : Group
    - role : String
    - user : User
    + GroupUser()
  }
  class ModelHasPermission {
    - model : String
    - modelType : String
    - permission : Permission
    + ModelHasPermission()
  }
  class ModelHasRole {
    - model : String
    - modelType : String
    - role : Role
    + ModelHasRole()
  }
  class PasswordReset {
    - email : String
    - token : String
    + PasswordReset()
  }
  class Permission {
    - authority : String
    - name : String
    + Permission()
  }
  class PersonalAccessToken {
    - abilities : String
    - expiredAt : LocalDateTime
    - lastUsedAt : LocalDateTime
    - name : String
    - token : String
    - tokenableId : Long
    - tokenableType : String
    + PersonalAccessToken()
  }
  class Role {
    - name : String
    - role : String
    + Role()
  }
  class RoleHasPermission {
    - permission : Permission
    - role : Role
    + RoleHasPermission()
  }
  abstract class SecurityEntityAbstract {
    - id : Long
    + SecurityEntityAbstract()
    + SecurityEntityAbstract(id : Long)
    + equals(obj : Object) : boolean
    + getId() : Long
    + hashCode() : int
    + setId(id : Long)
    + toString() : String
  }
  class User {
    - authorities : Collection<Authority>
    - enabled : Boolean
    - password : String
    - username : String
    + User()
    + getAuthorities() : Collection<? extends GrantedAuthority>
    + getEnabled() : Boolean
    + getPassword() : String
    + getUsername() : String
    + isAccountNonExpired() : boolean
    + isAccountNonLocked() : boolean
    + isCredentialsNonExpired() : boolean
    + isEnabled() : boolean
    + setAuthorities(authorities : Collection<Authority>)
    + setEnabled(enabled : Boolean)
    + setPassword(password : String)
    + setUsername(username : String)
  }
  class UserHasPermission {
    - permission : Permission
    - user : User
    + UserHasPermission()
  }
  class UserRole {
    - role : Role
    - user : User
    + UserRole()
  }
}
package com.mgm.investments.backend.controllers.api.investments {
  abstract class InvestmentsAbstractController {
    + InvestmentsAbstractController()
  }
}
package com.mgm.investments.backend.controllers.api.funds {
  abstract class FundsAbstractController {
    + FundsAbstractController()
  }
}
package com.mgm.investments.backend.model.services {
  abstract class AbstractService {
    + AbstractService()
  }
  class FundsService {
    - fundRepository : FundCrudRepository
    + FundsService()
    + loadFundById(id : Long) : Fund
  }
  class UserDetailsImplService {
    - userCrudRepository : UserCrudRepository
    + UserDetailsImplService()
    + loadUserByUsername(username : String) : UserDetails
  }
}
package com.mgm.investments.backend.config {
  class AsyncConfig {
    + AsyncConfig()
  }
  class HazelcastSessionConfig {
    + HazelcastSessionConfig()
    + hazelcastInstance() : HazelcastInstance
  }
  class MvcConfig {
    + MvcConfig()
    + addCorsMappings(registry : CorsRegistry)
  }
  class OpenApi30Config {
    + OpenApi30Config()
  }
  class WebSecurityConfig {
    - userDetailsImplService : UserDetailsImplService
    + WebSecurityConfig()
    + authenticationManager() : AuthenticationManager
    + authenticationProvider() : DaoAuthenticationProvider
    + configure(authenticationManagerBuilder : AuthenticationManagerBuilder)
    + passwordEncoder() : PasswordEncoder
    + securityFilterChain(http : HttpSecurity) : SecurityFilterChain
    ~ users(dataSource : DataSource) : UserDetailsManager
  }
  class WebSocketConfig {
    + WebSocketConfig()
    + configureMessageBroker(config : MessageBrokerRegistry)
    + registerStompEndpoints(registry : StompEndpointRegistry)
  }
}
package com.mgm.investments.backend.controllers.api.projects {
  abstract class ProjectsAbstractController {
    + ProjectsAbstractController()
  }
}
package com.mgm.investments.backend.model.dao.repositories.pageable {
  interface AccountPageableRepository {
  }
  interface AccountingGroupPageableRepository {
  }
  interface ActivityLogPageableRepository {
  }
  interface AuthorityPageableRepository {
  }
  interface BudgetDepreciationPageableRepository {
  }
  interface BudgetGenerationPageableRepository {
  }
  interface BudgetInterestsPageableRepository {
  }
  interface BudgetOthersPageableRepository {
  }
  interface BudgetPageableRepository {
  }
  interface BudgetPaymentOfCapitalPageableRepository {
  }
  interface BudgetTariffPageableRepository {
  }
  interface CashFlowPageableRepository {
  }
  interface CityPageableRepository {
  }
  interface ContractTypePageableRepository {
  }
  interface ConvertibleDebtInvestmentPageableRepository {
  }
  interface ConvertibleDebtSimulationPageableRepository {
  }
  interface CountryPageableRepository {
  }
  interface CurrencyTypePageableRepository {
  }
  interface DepartmentPageableRepository {
  }
  interface DocumentTypePageableRepository {
  }
  interface DueDiligenceApprovalPageableRepository {
  }
  interface DueDiligenceDocPageableRepository {
  }
  interface EntryPageableRepository {
  }
  interface EntryRulePageableRepository {
  }
  interface EquipmentLeasingInvestmentPageableRepository {
  }
  interface EquipmentLeasingSimulationPageableRepository {
  }
  interface FrecuencyTypePageableRepository {
  }
  interface FundPageableRepository {
  }
  interface FundProjectPageableRepository {
  }
  interface GroupAuthorityPageableRepository {
  }
  interface GroupHasPermisionPageableRepository {
  }
  interface GroupInvitationPageableRepository {
  }
  interface GroupPageableRepository {
  }
  interface GroupUserPageableRepository {
  }
  interface IdentificationTypePageableRepository {
  }
  interface InvestmentPlanPageableRepository {
  }
  interface LoanDisbursenmentInvestmentPageableRepository {
  }
  interface LoanDisbursenmentItemsPageableRepository {
  }
  interface LoansSimulationPageableRepository {
  }
  interface LocationPageableRepository {
  }
  interface MacroeconomyPageableRepository {
  }
  interface ModelHasPermissionPageableRepository {
  }
  interface ModelHasRolePageableRepository {
  }
  interface PasswordResetPageableRepository {
  }
  interface PaymentPlanPageableRepository {
  }
  interface PeriodicalEvaluationPageableRepository {
  }
  interface PermissionPageableRepository {
  }
  interface PersonalAccessTokenPageableRepository {
  }
  interface ProductPerformancePageableRepository {
  }
  interface ProjectActivityPageableRepository {
  }
  interface ProjectApprovalPageableRepository {
  }
  interface ProjectClientPageableRepository {
  }
  interface ProjectCompanyPageableRepository {
  }
  interface ProjectMacroeconomicPageableRepository {
  }
  interface ProjectOwnerPageableRepository {
  }
  interface ProjectPageableRepository {
  }
  interface ProjectStatusPageableRepository {
  }
  interface ProjectTypePageableRepository {
  }
  interface RecurrencyPageableRepository {
  }
  interface RiskPageableRepository {
  }
  interface RoleHasPermissionPageableRepository {
  }
  interface RolePageableRepository {
  }
  interface RulePageableRepository {
  }
  interface RuleTypePageableRepository {
  }
  interface SaleOfServiceInvestmentPageableRepository {
  }
  interface SaleOfServiceSimulationPageableRepository {
  }
  interface SectorPageableRepository {
  }
  interface TaxonomyPageableRepository {
  }
  interface TaxonomyRulePageableRepository {
  }
  interface ThecnicalEvaluationPageableRepository {
  }
  interface UserHasPermissionPageableRepository {
  }
  interface UserPageableRepository {
    + findByUsername(String) : Optional<User> {abstract}
  }
  interface UserRolePageableRepository {
  }
}
package com.mgm.investments.backend.controllers.api.admin {
  abstract class AdminAbstractController {
    + AdminAbstractController()
  }
}
package com.mgm.investments.backend.controllers.api {
  abstract class ApiRestAbstractController {
    + ApiRestAbstractController()
  }
  class IndexController {
    + IndexController()
    + index() : String
  }
}
package com.mgm.investments.backend.controllers.api.security {
  abstract class SecurityAbstractController {
    + SecurityAbstractController()
  }
}
package com.mgm.investments.backend.model.dao.repositories.crud {
  interface AccountCrudRepository {
  }
  interface AccountingGroupCrudRepository {
  }
  interface ActivityLogCrudRepository {
  }
  interface AuthorityCrudRepository {
  }
  interface BudgetCrudRepository {
  }
  interface BudgetDepreciationCrudRepository {
  }
  interface BudgetGenerationCrudRepository {
  }
  interface BudgetInterestsCrudRepository {
  }
  interface BudgetOthersCrudRepository {
  }
  interface BudgetPaymentOfCapitalCrudRepository {
  }
  interface BudgetTariffCrudRepository {
  }
  interface CashFlowCrudRepository {
  }
  interface CityCrudRepository {
  }
  interface ContractTypeCrudRepository {
  }
  interface ConvertibleDebtInvestmentCrudRepository {
  }
  interface ConvertibleDebtSimulationCrudRepository {
  }
  interface CountryCrudRepository {
  }
  interface CurrencyTypeCrudRepository {
  }
  interface DepartmentCrudRepository {
  }
  interface DocumentTypeCrudRepository {
  }
  interface DueDiligenceApprovalCrudRepository {
  }
  interface DueDiligenceDocCrudRepository {
  }
  interface EntryCrudRepository {
  }
  interface EntryRuleCrudRepository {
  }
  interface EquipmentLeasingInvestmentCrudRepository {
  }
  interface EquipmentLeasingSimulationCrudRepository {
  }
  interface FrecuencyTypeCrudRepository {
  }
  interface FundCrudRepository {
  }
  interface FundProjectCrudRepository {
  }
  interface GroupAuthorityCrudRepository {
  }
  interface GroupCrudRepository {
  }
  interface GroupHasPermisionCrudRepository {
  }
  interface GroupInvitationCrudRepository {
  }
  interface GroupUserCrudRepository {
  }
  interface IdentificationTypeCrudRepository {
  }
  interface InvestmentPlanCrudRepository {
  }
  interface LoanDisbursenmentInvestmentCrudRepository {
  }
  interface LoanDisbursenmentItemsCrudRepository {
  }
  interface LoansSimulationCrudRepository {
  }
  interface LocationCrudRepository {
  }
  interface MacroeconomyCrudRepository {
  }
  interface ModelHasPermissionCrudRepository {
  }
  interface ModelHasRoleCrudRepository {
  }
  interface PasswordResetCrudRepository {
  }
  interface PaymentPlanCrudRepository {
  }
  interface PeriodicalEvaluationCrudRepository {
  }
  interface PermissionCrudRepository {
  }
  interface PersonalAccessTokenCrudRepository {
  }
  interface ProductPerformanceCrudRepository {
  }
  interface ProjectActivityCrudRepository {
  }
  interface ProjectApprovalCrudRepository {
  }
  interface ProjectClientCrudRepository {
  }
  interface ProjectCompanyCrudRepository {
  }
  interface ProjectCrudRepository {
  }
  interface ProjectMacroeconomicCrudRepository {
  }
  interface ProjectOwnerCrudRepository {
  }
  interface ProjectStatusCrudRepository {
  }
  interface ProjectTypeCrudRepository {
  }
  interface RecurrencyCrudRepository {
  }
  interface RiskCrudRepository {
  }
  interface RoleCrudRepository {
  }
  interface RoleHasPermissionCrudRepository {
  }
  interface RuleCrudRepository {
  }
  interface RuleTypeCrudRepository {
  }
  interface SaleOfServiceInvestmentCrudRepository {
  }
  interface SaleOfServiceSimulationCrudRepository {
  }
  interface SectorCrudRepository {
  }
  interface TaxonomyCrudRepository {
  }
  interface TaxonomyRuleCrudRepository {
  }
  interface ThecnicalEvaluationCrudRepository {
  }
  interface UserCrudRepository {
    + findByUsername(String) : Optional<User> {abstract}
  }
  interface UserHasPermissionCrudRepository {
  }
  interface UserRoleCrudRepository {
  }
}
package com.mgm.investments.backend.controllers.websockets {
  class WebSocketsController {
    + WebSocketsController()
    + greeting(message : HelloMessage) : Greeting
  }
}
Project -->  "-sector" Sector
Budget -->  "-project" Project
ProjectCompany -->  "-location" Location
ThecnicalEvaluation -->  "-project" Project
SaleOfServiceInvestment -->  "-budget" Budget
ConvertibleDebtSimulation -->  "-budget" Budget
UserDetailsImplService -->  "-userCrudRepository" UserCrudRepository
City -->  "-department" Department
Rule -->  "-recurrence" Recurrency
Location -->  "-city" City
PeriodicalEvaluation -->  "-project" Project
Project -->  "-contractType" ContractType
RuleType -->  "-accountingGroup" AccountingGroup
EquipmentLeasingInvestment -->  "-budget" Budget
TaxonomyRule -->  "-taxonomy" Taxonomy
RoleHasPermission -->  "-role" Role
LoanDisbursenmentInvestment -->  "-budget" Budget
DueDiligenceApproval -->  "-project" Project
BudgetPaymentOfCapital -->  "-budget" Budget
RoleHasPermission -->  "-permission" Permission
Rule -->  "-parent" Rule
CashFlow -->  "-project" Project
BudgetGeneration -->  "-budget" Budget
Project -->  "-projectType" ProjectType
ProjectCompany -->  "-project" Project
GroupUser -->  "-group" Group
Department -->  "-country" Country
FundProject -->  "-project" Project
ProjectMacroeconomic -->  "-project" Project
ConvertibleDebtInvestment -->  "-budget" Budget
BudgetTariff -->  "-budget" Budget
BudgetDepreciation -->  "-budget" Budget
FundProject -->  "-fund" Fund
ProjectOwner -->  "-project" Project
Recurrency -->  "-frequencyType" FrequencyType
ProjectClient -->  "-location" Location
ProjectActivity -->  "-project" Project
User -->  "-authorities" Authority
ProjectCompany -->  "-companyIdentificationType" CompanyIdentificationType
WebSecurityConfig -->  "-userDetailsImplService" UserDetailsImplService
ProjectApproval -->  "-project" Project
ProjectMacroeconomic -->  "-macroeconomy" Macroeconomy
TaxonomyRule -->  "-rule" Rule
GroupMember -->  "-group" Group
InvestmentPlan -->  "-currencyType" CurrencyType
PaymentPlan -->  "-budget" Budget
DueDiligenceDoc -->  "-project" Project
ProjectClient -->  "-project" Project
Risk -->  "-project" Project
SaleOfServiceSimulation -->  "-budget" Budget
Taxonomy -->  "-taxonomy" Taxonomy
EntryRule -->  "-entry" Entry
Account -->  "-accountingGroup" AccountingGroup
InvestmentPlan -->  "-budget" Budget
GroupHasPermision -->  "-group" Group
Taxonomy -->  "-account" Account
ProductPerformance -->  "-project" Project
Entry -->  "-taxonomy" Taxonomy
LoanDisbursenmentItems -->  "-loanDisbursenment" LoanDisbursenmentInvestment
ModelHasRole -->  "-role" Role
UserRole -->  "-user" User
ProjectClient -->  "-identificationType" IdentificationType
ModelHasPermission -->  "-permission" Permission
GroupInvitation -->  "-group" Group
BudgetInterests -->  "-budget" Budget
UserHasPermission -->  "-permission" Permission
EquipmentLeasingSimulation -->  "-budget" Budget
GroupUser -->  "-user" User
GroupHasPermision -->  "-permission" Permission
ProjectOwner -->  "-documentType" DocumentType
LoansSimulation -->  "-budget" Budget
Project -->  "-location" Location
FundsService -->  "-fundRepository" FundCrudRepository
UserRole -->  "-role" Role
Project -->  "-projectStatus" ProjectStatus
EntryRule -->  "-rule" Rule
BudgetOthers -->  "-budget" Budget
UserHasPermission -->  "-user" User
Rule -->  "-ruleType" RuleType
GroupAuthority -->  "-group" Group
Entry -->  "-budget" Budget
IndexController --|> ApiRestAbstractController 
AdminAbstractController --|> ApiRestAbstractController 
CompaniesAbstractController --|> ApiRestAbstractController 
ContractsAbstractController --|> ApiRestAbstractController 
FundsAbstractController --|> ApiRestAbstractController 
InvestmentsAbstractController --|> ApiRestAbstractController 
ProjectsAbstractController --|> ApiRestAbstractController 
ReportsAbstractController --|> ApiRestAbstractController 
SecurityAbstractController --|> ApiRestAbstractController 
SettingsAbstractController --|> ApiRestAbstractController 
Account --|> EntityAbstract 
AccountingGroup --|> EntityAbstract 
Budget --|> EntityAbstract 
BudgetDepreciation --|> EntityAbstract 
BudgetGeneration --|> EntityAbstract 
BudgetInterests --|> EntityAbstract 
BudgetOthers --|> EntityAbstract 
BudgetPaymentOfCapital --|> EntityAbstract 
BudgetTariff --|> EntityAbstract 
CashFlow --|> EntityAbstract 
City --|> EntityAbstract 
CompanyIdentificationType --|> EntityAbstract 
ContractType --|> EntityAbstract 
ConvertibleDebtInvestment --|> EntityAbstract 
ConvertibleDebtSimulation --|> EntityAbstract 
Country --|> EntityAbstract 
CurrencyType --|> EntityAbstract 
Department --|> EntityAbstract 
DocumentType --|> EntityAbstract 
DueDiligenceApproval --|> EntityAbstract 
DueDiligenceDoc --|> EntityAbstract 
Entry --|> EntityAbstract 
EntryRule --|> EntityAbstract 
EquipmentLeasingInvestment --|> EntityAbstract 
EquipmentLeasingSimulation --|> EntityAbstract 
FrequencyType --|> EntityAbstract 
Fund --|> EntityAbstract 
FundProject --|> EntityAbstract 
IdentificationType --|> EntityAbstract 
InvestmentPlan --|> EntityAbstract 
LoanDisbursenmentInvestment --|> EntityAbstract 
LoanDisbursenmentItems --|> EntityAbstract 
LoansSimulation --|> EntityAbstract 
Location --|> EntityAbstract 
Macroeconomy --|> EntityAbstract 
PaymentPlan --|> EntityAbstract 
PeriodicalEvaluation --|> EntityAbstract 
ProductPerformance --|> EntityAbstract 
Project --|> EntityAbstract 
ProjectActivity --|> EntityAbstract 
ProjectApproval --|> EntityAbstract 
ProjectClient --|> EntityAbstract 
ProjectCompany --|> EntityAbstract 
ProjectMacroeconomic --|> EntityAbstract 
ProjectOwner --|> EntityAbstract 
ProjectStatus --|> EntityAbstract 
ProjectType --|> EntityAbstract 
Recurrency --|> EntityAbstract 
Risk --|> EntityAbstract 
Rule --|> EntityAbstract 
RuleType --|> EntityAbstract 
SaleOfServiceInvestment --|> EntityAbstract 
SaleOfServiceSimulation --|> EntityAbstract 
Sector --|> EntityAbstract 
Taxonomy --|> EntityAbstract 
TaxonomyRule --|> EntityAbstract 
ThecnicalEvaluation --|> EntityAbstract 
ActivityLog --|> SecurityEntityAbstract 
Group --|> SecurityEntityAbstract 
GroupAuthority --|> SecurityEntityAbstract 
GroupHasPermision --|> SecurityEntityAbstract 
GroupInvitation --|> SecurityEntityAbstract 
GroupUser --|> SecurityEntityAbstract 
ModelHasPermission --|> SecurityEntityAbstract 
ModelHasRole --|> SecurityEntityAbstract 
PasswordReset --|> SecurityEntityAbstract 
Permission --|> SecurityEntityAbstract 
PersonalAccessToken --|> SecurityEntityAbstract 
Role --|> SecurityEntityAbstract 
RoleHasPermission --|> SecurityEntityAbstract 
User --|> SecurityEntityAbstract 
UserHasPermission --|> SecurityEntityAbstract 
UserRole --|> SecurityEntityAbstract 
FundsService --|> AbstractService 
@enduml
